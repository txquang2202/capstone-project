import { company } from "@prisma/client";
import { ContextInterface } from "../context";
import { CompanyInput } from "./company.types";

const Query = {
  //Show list of companies
  company: async (
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
  //Trường size hiện tại đang bị xung đột kiểu dữ liệu nên tạm thời không thêm trường size nhé <3
  createCompany: async (
    _: any,
    { input }: { input: CompanyInput },
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
    { id, input }: { id: string; input: CompanyInput },
    { prisma }: ContextInterface,
  ): Promise<company | null> => {
    const companyId = parseInt(id);

    const existingCompany = await prisma.company.findUnique({
      where: { id: companyId },
    });

    if (!existingCompany) {
      throw new Error(`Company with ID ${id} does not exist`);
    }

    const updatedCompany = await prisma.company.update({
      where: { id: companyId },
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
    const companyId = parseInt(id);
    const existingCompany = await prisma.company.findUnique({
      where: { id: companyId },
    });

    if (!existingCompany) {
      throw new Error(`Company with ID ${id} does not exist`);
    }
    const deletedCompany = await prisma.company.delete({
      where: { id: companyId },
    });

    return deletedCompany;
  },
};

export default { Query, Mutation };
