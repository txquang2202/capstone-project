import { blog } from "@prisma/client";
import { ContextInterface } from "../context";

const Query = {
  // get blog by id
  blog: async (
    _: any,
    { id }: { id: number },
    { prisma }: ContextInterface,
  ): Promise<blog | null> => {
    const blog = await prisma.blog.findUnique({
      where: { id },
    });

    return blog;
  },
  blogs: async (
    _: any,
    { skip = 0, take = 10 }: { skip: number; take: number },
    { prisma }: ContextInterface,
  ): Promise<blog[]> => {
    const blogs = await prisma.blog.findMany({
      skip,
      take,
    });

    return blogs;
  },
};

const Blog = {
  user: async (parent: blog, _: any, { prisma }: ContextInterface) => {
    const user = await prisma.user.findUnique({
      where: { id: parent.user_id },
    });

    return user;
  },
};

const Mutation = {};

export default { Query, Mutation, Blog };
