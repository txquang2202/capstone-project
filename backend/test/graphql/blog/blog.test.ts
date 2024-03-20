import { graphql } from "graphql";
import { cleanUp, getContext, schema } from "../../";

describe("blog", () => {
  it("can query blogs", async () => {
    const query = `
      query {
        blogs {
          title
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

    const queryResult = res?.data?.blogs;
    expect(queryResult.length).toBeGreaterThan(0);
  });

  afterAll(async () => {
    await cleanUp();
  });
});
