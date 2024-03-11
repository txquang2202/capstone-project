import { job_apply } from "@prisma/client";
import { ContextInterface } from "../context";

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
    { prisma }: ContextInterface,
  ): Promise<job_apply[]> => {
    const jobApplications = await prisma.job_apply.findMany();
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

const Mutation = {
  //Add to application list
  applyJob: async (
    _: any,
    { input }: { input: job_apply },
    { prisma }: ContextInterface,
  ): Promise<job_apply> => {
    // console.log(input);
    const userExists = await prisma.user.findUnique({
      where: {
        id: input.user_id,
      },
    });
    const jobExists = await prisma.job.findUnique({
      where: {
        id: input.job_id,
      },
    });

    if (!userExists) {
      throw new Error(`User with ID ${input.user_id} does not exist`);
    }
    if (!jobExists) {
      throw new Error(`Job with ID ${input.job_id} does not exist`);
    }

    const jobApplicationExists = await prisma.job_apply.findFirst({
      where: {
        user_id: input.user_id,
        job_id: input.job_id,
      },
    });
    // console.log(jobApplicationExists);
    if (jobApplicationExists) {
      throw new Error(
        `Job application already exists for user with id:${input.user_id} and job with id:${input.job_id}`,
      );
    }
    // console.log(input);
    const newJobApplication = await prisma.job_apply.create({
      data: input,
    });
    return newJobApplication;
  },
  updateJobApplication: async (
    _: any,
    { id, input }: { id: string; input: job_apply },
    { prisma }: ContextInterface,
  ): Promise<job_apply | null> => {
    const existingJobApply = await prisma.job_apply.findUnique({
      where: { id },
    });

    if (!existingJobApply) {
      throw new Error(`Job application with ID ${id} does not exist`);
    }

    const updatedJobApply = await prisma.job_apply.update({
      where: { id },
      data: input,
    });

    return updatedJobApply;
  },
};

export default { Query, Mutation };
