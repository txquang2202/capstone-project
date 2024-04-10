import { job } from "@prisma/client";
import { ContextInterface } from "../context";

const Query = {
  //show job application by id
  savedJobs: async (
    _: any,
    __: any,
    { prisma, authUser }: ContextInterface,
  ): Promise<job[]> => {
    const jobs = await prisma.job_saved.findMany({
      where: { user_id: authUser.sub },
      include: {
        job: true
      }
    });

    const jobsWithApplyStatus = await Promise.all(jobs.map(async (savedJob) => {
      const appliedJob = await prisma.job_apply.findFirst({
        where: {
          user_id: authUser.sub,
          job_id: savedJob.job.id
        }
      });

      return {
        ...savedJob.job,
        was_applied: !!appliedJob
      };
    }));

    return jobsWithApplyStatus;
  },
};

const Mutation = {
  saveJob: async (
    _: any,
    { id }: { id: string },
    { prisma, authUser }: ContextInterface,
  ): Promise<boolean> => {
    const isExist = await prisma.job_saved.findUnique({
      where: {
        user_id_job_id: {
          user_id: authUser.sub,
          job_id: id,
        },
      },
    });

    if (isExist) return true;
    await prisma.job_saved.create({
      data: {
        user_id: authUser.sub,
        job_id: id,
      },
    });
    return true;
  },
  unsaveJob: async (
    _: any,
    { id }: { id: string },
    { prisma, authUser }: ContextInterface,
  ): Promise<boolean> => {
    const isExist = await prisma.job_saved.findUnique({
      where: {
        user_id_job_id: {
          user_id: authUser.sub,
          job_id: id,
        },
      },
    });

    if (!isExist) return true;
    await prisma.job_saved.delete({
      where: {
        user_id_job_id: {
          user_id: authUser.sub,
          job_id: id,
        },
      },
    });
    return true;
  },
};

export default { Query, Mutation };
