import { gql } from '@apollo/client';

export const GET_BLOGS = gql`
  query GetBlogs($skip: Int, $take: Int) {
    blogs(skip: $skip, take: $take) {
      title
      id
      content
    }
  }
`;

export const GET_BLOG = gql`
  query GetBlog($slug: String!) {
    blog(slug: $slug) {
      title
      id
      content
    }
  }
`;
