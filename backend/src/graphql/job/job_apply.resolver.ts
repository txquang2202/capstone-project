import { job_apply } from "@prisma/client";
import { ContextInterface } from "../context";
import { APPLIED_JOB_VARS } from "../mailer/mailer.constant";
import { APPROVED_JOB_VARS } from "./../mailer/mailer.constant";

const Query = {
  //show job application by id
  jobApplication: async (
    _: any,
    { id }: { id: string },
    { prisma }: ContextInterface,
  ): Promise<job_apply | null> => {
    const jobApplication = await prisma.job_apply.findUnique({
      where: { id },
    });
    return jobApplication;
  },
  //show newest job application
  currentJobApplication: async (
    _: any,
    __: any,
    { prisma, authUser }: ContextInterface,
  ): Promise<job_apply | null> => {
    const jobApplication = await prisma.job_apply.findMany({
      where: { user_id: authUser.sub },
      orderBy: {
        date_apply: "desc",
      },
      take: 1,
    });
    return jobApplication[0];
  },
  //Show list of job applications
  jobApplications: async (
    _: any,
    _args: any,
    { prisma, authUser }: ContextInterface,
  ): Promise<job_apply[]> => {
    // console.log("test", authUser.sub);
    const jobApplications = await prisma.job_apply.findMany({
      where: {
        user_id: authUser.sub,
      },
    });
    return jobApplications;
  },
  companyJobApplications: async (
    _: any,
    { companyId }: { companyId: string },
    { prisma }: ContextInterface,
  ) => {
    const companyJobApplications = await prisma.job_apply.findMany({
      where: {
        job: {
          company: {
            id: companyId,
          },
        },
      },
    });

    return companyJobApplications;
  },
};

const JobApplication = {
  job: async (parent: job_apply, _args: any, { prisma }: ContextInterface) => {
    return await prisma.job.findUnique({
      where: { id: parent.job_id },
    });
  },
  user: async (
    parent: job_apply,
    _args: any,
    { keycloak }: ContextInterface,
  ) => {
    return await keycloak.getUserData(parent.user_id);
  },
};

const Mutation = {
  //Add to application list
  applyJob: async (
    _: any,
    { input }: { input: job_apply },
    { prisma, authUser, mailer }: ContextInterface,
  ): Promise<job_apply> => {
    const jobExists = await prisma.job.findUnique({
      where: {
        id: input.job_id,
      },
    });

    if (!jobExists) {
      throw new Error(`Job with ID ${input.job_id} does not exist`);
    }

    const jobApplicationExists = await prisma.job_apply.findFirst({
      where: {
        user_id: authUser.sub,
        job_id: input.job_id,
      },
    });
    // console.log(jobApplicationExists);
    if (jobApplicationExists) {
      throw new Error(
        `Job application already exists for user with id:${authUser.sub} and job with id:${input.job_id}`,
      );
    }
    // console.log(input);
    const newJobApplication = await prisma.job_apply.create({
      data: { ...input, user_id: authUser.sub },
    });

    const company = await prisma.company.findUnique({
      where: {
        id: jobExists.company_id,
      },
    });

    if (!company) {
      throw new Error(`Company with ID ${jobExists.company_id} does not exist`);
    }

    const vars = { ...APPLIED_JOB_VARS };
    vars.verification_code = jobExists.name as string;
    vars.subject = `You submitted a job application for ${company.company_name}`;
    vars.title = vars.subject;

    mailer.sendEmail({
      email: authUser.email,
      subject: vars.subject,
      content: mailer.handleContent(vars),
    });

    return newJobApplication;
  },
  updateJobApplication: async (
    _: any,
    { id, input }: { id: string; input: job_apply },
    { prisma, mailer, keycloak }: ContextInterface,
  ): Promise<job_apply | null> => {
    const existingJobApply = await prisma.job_apply.findUnique({
      where: { id },
      include: {
        job: {
          include: {
            company: true,
          },
        },
      },
    });

    if (!existingJobApply) {
      throw new Error(`Job application with ID ${id} does not exist`);
    }

    const updatedJobApply = await prisma.job_apply.update({
      where: { id },
      data: input,
    });

    if (input.status === "Accepted") {
      const vars = { ...APPROVED_JOB_VARS };
      vars.subject =
        vars.subject + " from " + existingJobApply.job.company.company_name;
      vars.title = vars.subject;

      const user = await keycloak.getUserData(existingJobApply.user_id);
      mailer.sendEmail({
        email: user.email,
        subject: vars.subject,
        content: mailer.handleContent(vars),
      });
    }

    return updatedJobApply;
  },
};

export default { Query, Mutation, JobApplication };
