import { job } from "@prisma/client";
import { ContextInterface } from "../context";
import { JobListResponseDto } from "./dtos/JobListResponseDto";

const Query = {
  // Show job by id
  job: async (
    _: any,
    { id }: { id: string },
    { prisma }: ContextInterface,
  ): Promise<JobListResponseDto | null> => {
    const job = await prisma.job.findUnique({
      where: { id },
      include: {
        company: true,
        job_working_location: {
          include: {
            company_location: {
              select: {
                address: true,
              },
            },
          },
        },
      },
    });
    return job;
  },

  // Show list of jobs
  jobs: async (
    _: any,
    _args: any,
    { prisma }: ContextInterface,
  ): Promise<job[]> => {
    const jobs = await prisma.job.findMany({
      include: {
        company: true,
        job_working_location: {
          include: {
            company_location: {
              select: {
                address: true,
              },
            },
          },
        },
      },
    });
    return jobs;
  },
};

const Mutation = {
  //Add to job list
  createJob: async (
    _: any,
    { input }: { input: job },
    { prisma }: ContextInterface,
  ): Promise<job> => {
    input.date_posted = new Date();
    const companyExist = await prisma.company.findUnique({
      where: {
        id: input.company_id,
      },
    });

    if (!companyExist) {
      throw new Error(`Company with ID ${input.company_id} does not exist`);
    }

    const newJob = await prisma.job.create({
      data: input,
    });
    return newJob;
  },
  //updating job by id
  updateJob: async (
    _: any,
    { id, input }: { id: string; input: job },
    { prisma }: ContextInterface,
  ): Promise<job | null> => {
    const existingJob = await prisma.job.findUnique({
      where: { id },
    });

    if (!existingJob) {
      throw new Error(`Job with ID ${id} does not exist`);
    }

    const updatedJob = await prisma.job.update({
      where: { id },
      data: input,
    });

    return updatedJob;
  },

  // Delete a job by ID
  deleteJob: async (
    _: any,
    { id }: { id: string },
    { prisma }: ContextInterface,
  ): Promise<job | null> => {
    const existingJob = await prisma.job.findUnique({
      where: { id },
    });

    if (!existingJob) {
      throw new Error(`Job with ID ${id} does not exist`);
    }
    const deletedJob = await prisma.job.delete({
      where: { id },
    });

    return deletedJob;
  },
};

export default { Query, Mutation };
