import { job } from "@prisma/client";
import { ContextInterface } from "../context";
import Logger from "../../utils/logger";
import dotenv from "dotenv";
dotenv.config();

const Query = {
  //Show list of job
  searchJob: async (
    _: any,
    {
      query,
      skip = 0,
      take = 10,
    }: { query: string; skip: number; take: number },
    { prisma, elastic }: ContextInterface,
  ): Promise<job[]> => {
    const logger = new Logger();
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
          from: skip,
          size: take,
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
