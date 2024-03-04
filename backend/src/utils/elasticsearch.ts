import { Client } from "@elastic/elasticsearch";
import Logger from "./logger";
require("dotenv").config();

const logger = new Logger();
if (!process.env.ELASTIC_BASEURL) {
    logger.error("ELASTIC_HOST is not defined in .env file", {
        route: "src/utils/elasticsearch.ts line 10",
    });
}
const client = new Client({
    node: process.env.ELASTIC_BASEURL || "http://localhost:9200",
});

if (!client.ping()) {
    logger.error("Elasticsearch is not running", {
        route: "src/utils/elasticsearch.ts line 18",
    });
}
export default client;

// export const createIndex = async (indexName: string) => {
//     await client.indices.create({ index: indexName });
// };

// export const search = async (indexName: string, query: string) => {
//     const result = await client.search({
//         index: indexName,
//         body: {
//             query: {
//                 match: { title: query },
//             },
//         },
//     });

//     return result.hits.hits;
// };

// export const bulkCreateDocument = async (indexName: string, documents: any[]) => {
//     const body = documents.flatMap((doc) => [
//         { index: { _index: indexName } },
//         doc,
//     ]);

//     await client.bulk({ refresh: true, body });
// };