import { graphql } from "graphql";
import { cleanUp, getContext, schema } from "../../";

describe("company", () => {
    it("can query companies", async () => {
        const query = `
        query {
            companies {
                company_name
                company_type
                country
                working_day
            }
        }
        `;
        const variables = {};
        const res = await graphql(
        schema,
        query,
        null,
        await getContext(),
        variables,
        );
        const queryResult = res?.data?.companies;
        console.log(res);
        expect(queryResult.length).toBeGreaterThan(0);
    });
    it("can query company", async () => {
        const query = `
        query {
            company (id:"9bf98d48-29c9-4fbd-a341-cfe940028e66"){
                company_name
                company_type
                country
                working_day
            }
        }
        `;
    
        const variables = {};
    
        const res = await graphql(
        schema,
        query,
        null,
        await getContext(),
        variables,
        );
    
        const queryResult = res?.data?.company;
        console.log(res);
        expect(queryResult).toBeTruthy();
    });

    it("can query JobCompanie", async () => {
        const query = `
        query {
            jobCompany (id:"9bf98d48-29c9-4fbd-a341-cfe940028e66"){
               name
               salary_from
                salary_to
                unit
            }
        }
        `;
    
        const variables = {};
    
        const res = await graphql(
        schema,
        query,
        null,
        await getContext(),
        variables,
        );
    
        const queryResult = res?.data?.jobCompany;
        console.log(res);
        expect(queryResult).toBeTruthy();
    });
    
    it("can query companieRequest", async () => {
        const query = `
        query {
            companyRequests {
               id
               representative_name
               representative_email

            }
        }
        `;
    
        const variables = {};
    
        const res = await graphql(
        schema,
        query,
        null,
        await getContext(),
        variables,
        );
    
        const queryResult = res?.data?.companyRequests;
        console.log(res);
        expect(queryResult).toBeTruthy();
    });

    it("can query companyReviews", async () => {
        const query = `
        query {
            companyReviews {
                id
                company_id
                summary
               
            }
        }
        `;
    
        const variables = {};
    
        const res = await graphql(
        schema,
        query,
        null,
        await getContext(),
        variables,
        );
    
        const queryResult = res?.data?.companyReviews;
        console.log(res);
        expect(queryResult.length).toBeGreaterThan(0);
    });
    afterAll(async () => {
        await cleanUp();
    });
});







// describe("searchCompany", () => {
//     it("can search companies", async () => {
//         const query = `
//         query {
//             searchCompany(query: "Dev") {
//                 company_name
//                 company_type

//             }
//         }
//         `;
    
//         const variables = {};
    
//         const res = await graphql(
//         schema,
//         query,
//         null,
//         await getContext(),
//         variables,
//         );
    
//         const searchResult = res?.data?.searchCompany;
//         //console.log(res);
//         expect(searchResult).toBeTruthy(); // Đảm bảo dữ liệu được trả về không null hoặc undefined
//         expect(searchResult.length).toBeGreaterThan(0); // Đảm bảo có ít nhất một công ty được tìm thấy
//     });
    
//     afterAll(async () => {
//         await cleanUp();
//     });
// });




// describe("Create Company", () => {
//     it("Create Company", async () => {
//         const mutation = `
//         mutation {
//             createCompany(input:{
//                 company_name:"Test Company",
//                 company_type:"Test",
//                 country:"Test",
//                 working_day:"Test"
//                 ot_policy:"Test"
//                 company_size:"10"
//                 overview:"Test123456789100"
//                 company_website:"Test"
//                 company_facebook:"Test"
//                 brief_overview:"Test"

//             }) {
//                 company_name
//                 company_type
//                 country
//                 working_day
//                 ot_policy
//                 company_size
//                 overview
//                 company_website
//                 company_facebook
//                 brief_overview



               

//             }
//         }
//         `;
    
//         const variables = {};
    
//         const res = await graphql(
//         schema,
//         mutation,
//         null,
//         await getContext(),
//         variables,
//         );
    
//         const mutationResult = res?.data?.createCompany;
//         //console.log(res);
//         expect(mutationResult).toBeTruthy();
//     });
    
//     afterAll(async () => {
//         await cleanUp();
//     });
// });




