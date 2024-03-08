import { company } from "@prisma/client";
import { ContextInterface } from "../context";

const Query = {
  //Show list of companies
  company: async (
    _: any,
    { id }: { id: string },
    { prisma }: ContextInterface,
  ): Promise<company | null> => {
    const companyByID = await prisma.company.findUnique({
      where: { id },
    });
    return companyByID;
  },
  companies: async (
    _: any,
    _args: any,
    { prisma }: ContextInterface,
  ): Promise<company[]> => {
    const companies = await prisma.company.findMany();
    return companies;
  },
};

const Mutation = {
  //Add a new company
  createCompany: async (
    _: any,
    { input }: { input: company },
    { prisma }: ContextInterface,
  ): Promise<company> => {
    const newCompany = await prisma.company.create({
      data: input,
    });
    return newCompany;
  },

  // Update an existing company by ID
  updateCompany: async (
    _: any,
    { id, input }: { id: string; input: company },
    { prisma }: ContextInterface,
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

    return updatedCompany;
  },

  // Delete a company by ID
  deleteCompany: async (
    _: any,
    { id }: { id: string },
    { prisma }: ContextInterface,
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

    return deletedCompany;
  },
};

export default { Query, Mutation };
