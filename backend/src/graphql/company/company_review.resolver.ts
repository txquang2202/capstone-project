import { review } from "@prisma/client";
import { ContextInterface } from "../context";

const Query = {
  companyReviews: async (
    _: any,
    _args: any,
    { prisma }: ContextInterface,
  ): Promise<review[]> => {
    return await prisma.review.findMany();
  },

  companyReview: async (
    _: any,
    { id }: { id: number },
    { prisma }: ContextInterface,
  ): Promise<review | null> => {
    const review = await prisma.review.findUnique({
      where: { id },
    });
    return review;
  },
};

const Mutation = {
  createCompanyReview: async (
    _: any,
    { input }: { input: review },
    { prisma }: ContextInterface,
  ): Promise<review> => {
    const existingUser = await prisma.user.findUnique({
      where: { id: input.user_id },
    });
    const existingCompany = await prisma.company.findUnique({
      where: { id: input.company_id },
    });

    if (!existingUser) {
      throw new Error(`User with ID ${input.user_id} does not exist`);
    }
    if (!existingCompany) {
      throw new Error(`Company with ID ${input.company_id} does not exist`);
    }
    const existingReview = await prisma.review.findFirst({
      where: {
        user_id: input.user_id,
        company_id: input.company_id,
      },
    });

    if (existingReview) {
      throw new Error(
        `Review from user with ID ${input.user_id} for company with ID ${input.company_id} already exists`,
      );
    }

    const newCompanyReview = await prisma.review.create({
      data: input,
    });

    return newCompanyReview;
  },

  updateCompanyReview: async (
    _: any,
    { id, input }: { id: number; input: review },
    { prisma }: ContextInterface,
  ): Promise<review | null> => {
    const existingReview = await prisma.review.findUnique({
      where: { id },
    });

    if (!existingReview) {
      throw new Error(`Company review with ID ${id} does not exist`);
    }
    // console.log(id);
    return await prisma.review.update({
      where: { id },
      data: input,
    });
  },

  deleteCompanyReview: async (
    _: any,
    { id }: { id: number },
    { prisma }: ContextInterface,
  ): Promise<review | null> => {
    const existingReview = await prisma.review.findUnique({
      where: { id },
    });

    if (!existingReview) {
      throw new Error(`Company review with ID ${id} does not exist`);
    }

    return await prisma.review.delete({
      where: { id },
    });
  },
};

export default { Query, Mutation };
