import { tag } from "@prisma/client";
import { ContextInterface } from "../context";

const Query = {
  tags: async (
    _: any,
    __: any,
    { prisma }: ContextInterface,
  ): Promise<tag[]> => {
    const tags = await prisma.tag.findMany();
    return tags;
  },
};
export default { Query };