import { job } from "@prisma/client";
import { ContextInterface } from "../context";
import Logger from "../../utils/logger";
import dotenv from "dotenv";
dotenv.config();

const Query = {
  //Show list of job
  search: async (
    _: any,
    _args: any,
    { prisma, elastic }: ContextInterface,
  ): Promise<job[]> => {
    const logger = new Logger();
    const { query } = _args;
    logger.info(`searching for jobs with query: ${query}`);
    try {
      if (!query || query === "") {
        return prisma.job.findMany();
      }
      const result = await elastic.search({
        index: "job",
        body: {
          query: {
            multi_match: {
              query,
              fields: ["name", "skills"],
            },
          },
        },
      });
      logger.info(`search result: ${JSON.stringify(result)}`);
      return result.hits.hits.map((hit: any) => hit._source);
    } catch (error) {
      logger.error("error searching for jobs", error);
      return [];
    }
  },
};


export default { Query };
