import { job_apply } from "@prisma/client";
import { ApplyJobInput } from "./job.types";
import { ContextInterface } from "../context";

const Query = {
  //Show list of job
  jobApplicaitons: async (
    _: any,
    _args: any,
    { prisma }: ContextInterface,
  ): Promise<job_apply[]> => {
    const jobApply = await prisma.job_apply.findMany();
    return jobApply;
  },
};

const Mutation = {
  //Add to application list
  applyJob: async (
    _: any,
    { input }: { input: ApplyJobInput },
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

    if (jobApplicationExists) {
      throw new Error(
        `Job application already exists for user ${input.user_id} and job ${input.job_id}`,
      );
    }

    const newJobApplication = await prisma.job_apply.create({
      data: input,
    });
    return newJobApplication;
  },
};

export default { Query, Mutation };
