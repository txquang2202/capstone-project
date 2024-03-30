import { gql } from '@apollo/client';

import { Blog } from '@/types/blog';

export const GET_BLOGS = gql`
  query GetBlogs($skip: Int, $take: Int) {
    blogs(skip: $skip, take: $take) {
      title
      id
      content
    }
  }
`;
export type GetBlogResponse = DataResponse<'blog', Blog>;
export type GetBlogVariable = { blogId: string };
export const GET_BLOG = gql`
  query GetBlog($slug: String!) {
    blog(slug: $slug) {
      title
      id
      content
    }
  }
`;

export type CreateBlogResponse = DataResponse<'createBlog', { id: string }>;
export type CreateBlogVariable = {
  input: {
    user_id: string;
    slug: string;
    title: string;
    time_read: number;
    content: string;
    tag: string;
  };
};

export const CREATE_BLOG = gql`
  mutation Mutation($input: JobInput) {
    createBlog(input: $input) {
      id
    }
  }
`;
