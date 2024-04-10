import { company, company_request } from "@prisma/client";

import { ContextInterface } from "../context";
import { EVENT } from "../../constants/elasticsearch";

const Query = {
  //Show list of companies
  company: async (
    _: any,
    { id }: { id: string },
    { prisma }: ContextInterface,
  ): Promise<company | null> => {
    const companyByID = await prisma.company.findUnique({
      where: { id },
      include: {
        company_location: true,
      },
    });
    return companyByID;
  },
  companies: async (
    _: any,
    _args: any,
    { prisma }: ContextInterface,
  ): Promise<company[]> => {
    const companies = await prisma.company.findMany({
      include: {
        company_location: true,
      },
    });
    return companies;
  },
  companySpotlight: async (
    _: any,
    _args: any,
    { prisma }: ContextInterface,
  ): Promise<company> => {
    const companies = await prisma.company.findMany({
      include: {
        company_location: true,
        job: true,
      },
    });

    return companies[0];
  },
  jobCompany: async (
    _: any,
    { id }: { id: string },
    { prisma }: ContextInterface,
  ) => {
    const jobs = await prisma.job.findMany({
      where: {
        company_id: id,
      },
    });
    //console.log(jobs);
    return jobs;
  },
  //Show list of company request
  companyRequests: async (
    _: any,
    _args: any,
    { prisma }: ContextInterface,
  ): Promise<company_request[]> => {
    const companyRequests = await prisma.company_request.findMany();
    return companyRequests;
  },
};
const Mutation = {
  //Add a new company
  createCompany: async (
    _: any,
    { input }: { input: company },
    { prisma, kafkaProducer }: ContextInterface,
  ): Promise<company> => {
    const newCompanyRequest = await prisma.company.create({
      data: input,
    });
    kafkaProducer.send(process.env.KAFKA_TOPIC_COMPANY || "", {
      index: process.env.ELASTIC_COMPANY_INDEX || "company",
      event: EVENT.CREATE,
      data: newCompanyRequest,
    });
    return newCompanyRequest;
  },

  // Update an existing company by ID
  updateCompany: async (
    _: any,
    { id, input }: { id: string; input: company },
    { prisma, kafkaProducer }: ContextInterface,
  ): Promise<company | null> => {
    const existingCompany = await prisma.company.findUnique({
      where: { id },
    });

    if (!existingCompany) {
      throw new Error(`Company with ID ${id} does not exist`);
    }

    const updatedCompany = await prisma.company.update({
      where: { id },
      data: input,
    });
    kafkaProducer.send(process.env.KAFKA_TOPIC_COMPANY || "", {
      index: process.env.ELASTIC_COMPANY_INDEX || "company",
      event: EVENT.UPDATE,
      data: updatedCompany,
    });
    return updatedCompany;
  },

  // Delete a company by ID
  deleteCompany: async (
    _: any,
    { id }: { id: string },
    { prisma, kafkaProducer }: ContextInterface,
  ): Promise<company | null> => {
    const existingCompany = await prisma.company.findUnique({
      where: { id },
    });

    if (!existingCompany) {
      throw new Error(`Company with ID ${id} does not exist`);
    }
    const deletedCompany = await prisma.company.delete({
      where: { id },
    });
    kafkaProducer.send(process.env.KAFKA_TOPIC_COMPANY || "", {
      index: process.env.ELASTIC_COMPANY_INDEX || "company",
      event: EVENT.DELETE,
      data: deletedCompany,
    });
    return deletedCompany;
  },
  //Add a new company request
  createCompanyRequest: async (
    _: any,
    { input }: { input: company_request },
    { prisma }: ContextInterface,
  ): Promise<company_request> => {
    const newCompanyRequest = await prisma.company_request.create({
      data: input,
    });
    return newCompanyRequest;
  }, // Delete a company request by ID
  deleteCompanyRequest: async (
    _: any,
    { id }: { id: string },
    { prisma }: ContextInterface,
  ): Promise<company_request | null> => {
    const deletedCompanyRequest = await prisma.company_request.delete({
      where: { id },
    });
    return deletedCompanyRequest;
  },
};

export default { Query, Mutation };
