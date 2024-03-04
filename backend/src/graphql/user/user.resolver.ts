// import { User } from "@prisma/client";
// import { ContextInterface } from "../context";

import { user } from "@prisma/client";
import { ContextInterface } from "../context";

const Query = {
  // user: async (
  //   _: any,
  //   {
  //     id,
  //   }: {
  //     id: number;
  //   },
  //   { prisma }: ContextInterface,
  // ): Promise<User> => {
  //   // const user = await prisma.user.findUnique({
  //   //   where: {
  //   //     id,
  //   //   },
  //   // });

  //   // if (!user) {
  //   //   throw new Error("User not found!");
  //   // }

  //   // return user;
  // },
  // users: async (
  //   _: any,
  //   __: any,
  //   { prisma }: ContextInterface,
  // ): Promise<User[]> => {
  //   return await prisma.user.findMany();
  // },
  helloWord: async (): Promise<string> => {
    return "Hello Word";
  },
};

const Mutation = {
  createUser: async (
    _: any,
    { input }: { input: user },
    { prisma }: ContextInterface,
  ): Promise<user> => {
    // return await prisma.user.create({
    //   data: input,
    // });
    return {
      id: 1,
      name: "test",
    };
  },
  // updateUser: async (
  //   _: any,
  //   { id, input }: { id: string; input: User },
  //   { prisma }: ContextInterface,
  // ): Promise<User> => {
  //   const user = await prisma.user.update({
  //     where: {
  //       id,
  //     },
  //     data: input,
  //   });
  //   return user;
  // },
  // deleteUser: async (
  //   _: any,
  //   { id }: { id: string },
  //   { prisma }: ContextInterface,
  // ): Promise<User> => {
  //   const user = await prisma.user.delete({
  //     where: {
  //       id,
  //     },
  //   });
  //   return user;
  // },
};
export default { Query, Mutation };
