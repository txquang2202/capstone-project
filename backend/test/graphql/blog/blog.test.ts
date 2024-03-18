import { ApolloClient } from "@apollo/client";
import { gql } from "apollo-server-express";
import { createApolloClient } from "../../testUtils";

let client: ApolloClient<any>;
describe("blog", () => {
  beforeAll(async () => {
    client = await createApolloClient();
  });

  afterAll(async () => {
    await client.stop();
  });

  it("can query blogs", async () => {
    const query = gql`
      query {
        blogs {
          title
        }
      }
    `;

    const queryResponse = await client.query({ query });
    const queryResult = queryResponse.data.blogs;
    expect(queryResult.length).toBeGreaterThan(0);
    expect(queryResult).toEqual(
      expect.arrayContaining([expect.objectContaining({ __typename: "Blog" })]),
    );
  });
});
