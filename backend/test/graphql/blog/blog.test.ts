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
  it("can create a new blog", async () => {
    const mutation = `
      mutation {
        createBlog(input: { title: "New Blog", content: "This is a new blog content.",slug:"new-blog",
        user_id:"42b675eb-8db6-4c6a-be39-61164cc47dfe"}) {
          title
          content
          slug
          user_id
        }
      }
    `;
      const variables = {};
      const res = await graphql(
          schema,
          mutation,
          null,
          await getContext(),
          variables,
      );
      console.log(res);
      const mutationResult = res?.data?.createBlog;
      expect(mutationResult).toBeTruthy();
      expect(mutationResult.title).toEqual("New Blog");
      expect(mutationResult.content).toEqual("This is a new blog content.");
  });

  afterAll(async () => {
    await cleanUp();
  });
});
