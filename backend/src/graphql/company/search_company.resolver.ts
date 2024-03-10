import { company } from "@prisma/client";
import { ContextInterface } from "../context";
import Logger from "../../utils/logger";
import dotenv from "dotenv";
dotenv.config();

const Query = {
  //Show list of job
  searchCompany: async (
    _: any,
    {
      query,
      skip = 0,
      take = 10,
    }: { query: string; skip: number; take: number },
    { prisma, elastic }: ContextInterface,
  ): Promise<company[]> => {
    const logger = new Logger();
    logger.info(`searching for jobs with query: ${query}`);
    try {
      if (!query || query === "") {
        return prisma.company.findMany({
          skip,
          take,
        });
      }
      const result = await elastic.search({
        index: process.env.ELASTIC_COMPANY_INDEX || "company",
        body: {
          query: {
            multi_match: {
              query,
              fields: ["company_name", "company_type"],
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
