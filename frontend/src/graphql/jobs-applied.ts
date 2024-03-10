import { gql } from '@apollo/client';

export const GET_JOBS_APPLIED = gql`
  query CompanyJobApplications($companyId: ID!) {
    companyJobApplications(companyId: $companyId) {
      id
      cv
      cover_letter
      date_apply
      status
      job {
        name
      }
      user {
        name
        email
        img_url
      }
    }
  }
`;
// const companyJobApplications = async () => {
//   const id = 'đá';
//   const {
//     data: { companyJobApplications },
//   } = await getClient().query({
//     query: GET_JOBS_APPLIED, // Assuming GET_JOBS_APPLIED is a valid GraphQL query
//     variables: {
//       id: id,
//     },
//   });
//   console.log(companyJobApplications);

//   return companyJobApplications;
// };
// export const GET_BLOG = gql`
//   query GetBlog($id: ID!) {
//     blog(id: $id) {
//       title
//       id
//       content
//     }
//   }
// `;
