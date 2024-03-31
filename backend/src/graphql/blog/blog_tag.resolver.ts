import { blog_tag } from "@prisma/client";
import { ContextInterface } from "../context";

const Query = {
    blogTags: async (
        _: any,
        __: any,
        { prisma }: ContextInterface,
    ): Promise<blog_tag[]> => {
        const blogTags = await prisma.blog_tag.findMany();
        return blogTags;
    },
    

};
const Mutation = {
    // create blog
    createBlogTag: async (
        _: any,
        { input }: { input: blog_tag },
        { prisma }: ContextInterface,
    ): Promise<blog_tag> => {
        const blogTag = await prisma.blog_tag.create({
        data: input,
        });
        return blogTag;
    },
   
    };
    export default { Query, Mutation };