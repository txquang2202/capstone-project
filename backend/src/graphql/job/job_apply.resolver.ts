import { job_apply } from "@prisma/client";
import { ContextInterface } from "../context";
import mailerService from "../../services/mailer";
import { APPLIED_JOB_VARS } from "../mailer/mailer.constant";

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
  //Show list of job applications
  jobApplications: async (
    _: any,
    _args: any,
    { prisma, authUser }: ContextInterface,
  ): Promise<job_apply[]> => {
    console.log("test", authUser.sub);
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
      include: {
        job: {
          include: {
            company: true,
          },
        },
        user: {
          select: {
            name: true,
            email: true,
            img_url: true,
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
  // user: async (parent: job_apply, _args: any, { prisma }: ContextInterface) => {
  //   return await prisma.user.findUnique({
  //     where: { id: parent.user_id },
  //   });
  // },
};

const Mutation = {
  //Add to application list
  applyJob: async (
    _: any,
    { input }: { input: job_apply },
    { prisma, authUser }: ContextInterface,
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

    mailerService.sendEmail({
      email: authUser.email,
      subject: vars.subject,
      content: mailerService.handleContent(APPLIED_JOB_VARS),
    });

    return newJobApplication;
  },
};

export default { Query, Mutation, JobApplication };
