import { job } from "@prisma/client";
import dotenv from "dotenv";
import { EVENT } from "../../constants/elasticsearch";
import { ContextInterface } from "../context";
import { JobListResponseDto } from "./dtos/JobListResponseDto";
dotenv.config();

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
        // company: true,
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

const JobPayLoad = {
  company: async (parent: job, _args: any, { prisma }: ContextInterface) => {
    return await prisma.company.findUnique({
      where: { id: parent.company_id },
    });
  },
};

const Mutation = {
  //Add to job list
  createJob: async (
    _: any,
    { input }: { input: job },
    { prisma, kafkaProducer }: ContextInterface,
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
    kafkaProducer.send(process.env.KAFKA_TOPIC_JOB || "", {
      index: process.env.ELASTIC_JOB_INDEX || "job",
      event: EVENT.CREATE,
      data: newJob,
    });
    return newJob;
  },
  //updating job by id
  updateJob: async (
    _: any,
    { id, input }: { id: string; input: job },
    { prisma, kafkaProducer }: ContextInterface,
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
    kafkaProducer.send(process.env.KAFKA_TOPIC_JOB || "", {
      index: process.env.ELASTIC_JOB_INDEX || "job",
      event: EVENT.UPDATE,
      data: updatedJob,
    });

    return updatedJob;
  },

  // Delete a job by ID
  deleteJob: async (
    _: any,
    { id }: { id: string },
    { prisma, kafkaProducer }: ContextInterface,
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
    kafkaProducer.send(process.env.KAFKA_TOPIC_JOB || "", {
      index: process.env.ELASTIC_JOB_INDEX || "job",
      event: EVENT.DELETE,
      data: deletedJob,
    });
    return deletedJob;
  },
};

export default { Query, Mutation, JobPayLoad };
