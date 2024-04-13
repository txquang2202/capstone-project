import { graphql } from "graphql";
import { cleanUp, getContext, schema } from "../../";

describe("job", () => {
    it("can query jobs", async () => {
        const query = `
        query {
            jobs {
                name
                skills
                company {
                    company_name
                }
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
    
        const queryResult = res?.data?.jobs;
        console.log(res);
        expect(queryResult.length).toBeGreaterThan(0);
    });
    
    afterAll(async () => {
        await cleanUp();
    });
}
);