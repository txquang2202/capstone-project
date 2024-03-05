import { gql } from '@apollo/client';

export const GET_BLOGS = gql`
  query GetBlogs($skip: Int, $take: Int) {
    blogs(skip: $skip, take: $take) {
      title
      id
      content
      user {
        id
        name
      }
    }
  }
`;

export const GET_BLOG = gql`
  query GetBlog($id: Int!) {
    blog(id: $id) {
      title
      id
      content
      user {
        id
        name
      }
    }
  }
`;
