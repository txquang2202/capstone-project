import { job_apply } from "@prisma/client";
import { ContextInterface } from "../context";

const Query = {
  //show job application by id
  jobApplication: async (
    _: any,
    { id }: { id: string },
    { prisma }: ContextInterface,
  ): Promise<job_apply | null> => {
    const jobId = parseInt(id);
    const jobApplication = await prisma.job_apply.findUnique({
      where: { id: jobId },
    });
    return jobApplication;
  },
  //Show list of job applications
  jobApplicaitons: async (
    _: any,
    _args: any,
    { prisma }: ContextInterface,
  ): Promise<job_apply[]> => {
    const jobApplications = await prisma.job_apply.findMany();
    return jobApplications;
  },
};

const Mutation = {
  //Add to application list
  applyJob: async (
    _: any,
    { input }: { input: job_apply },
    { prisma }: ContextInterface,
  ): Promise<job_apply> => {
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
        `Job application already exists for user ${input.user_id} and job ${input.job_id}`,
      );
    }
    // console.log(input);
    const newJobApplication = await prisma.job_apply.create({
      data: input,
    });
    return newJobApplication;
  },
};

export default { Query, Mutation };
