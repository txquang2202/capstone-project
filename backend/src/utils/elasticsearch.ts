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
  auth: {
    username: process.env.ELASTIC_USERNAME || "elastic",
    password: process.env.ELASTIC_PASSWORD || "",
  },
  tls: {
    ca: process.env.ELASTIC_CA_CERT || "",
    rejectUnauthorized: false,
  },
});

const createCapstoneIndex = async () => {
  try {
    const indexExists = await client.indices.exists({
      index: "capstone",
    });

    if (!indexExists) {
      await client.indices.create({
        index: "capstone",
      });

      console.log("Capstone index created successfully.");
    } else {
      console.log("Capstone index already exists.");
    }
  } catch (error) {
    console.error("Error creating Capstone index:", error);
  }
};
// Assuming you have an Elasticsearch client instantiated as 'elasticsearchClient'
const createJobIndex = async () => {
  try {
    const indexExists = await client.indices.exists({
      index: process.env.ELASTIC_JOB_INDEX || "job",
    });

    if (!indexExists) {
      await client.indices.create({
        index: process.env.ELASTIC_JOB_INDEX || "job",
        body: {
          mappings: {
            properties: {
              name: { type: "text" },
              country: { type: "keyword" },
              skills: { type: "text" },
              working_type: { type: "keyword" },
              top_3_reason: { type: "text" },
              job_description: { type: "text" },
              skill_demand: { type: "text" },
              why_you_love_working_here: { type: "text" },
              date_posted: { type: "date" },
              id: { type: "keyword" },
              company_id: { type: "keyword" },
              is_closed: { type: "boolean" },
              salary_from: { type: "integer" },
              salary_to: { type: "integer" },
              hide_salary: { type: "boolean" },
              unit: { type: "keyword" },
            },
          },
        },
      });

      console.log("Job index created successfully.");
    } else {
      console.log("Job index already exists.");
    }
  } catch (error) {
    console.error("Error creating job index:", error);
  }
};

// Assuming you have an Elasticsearch client instantiated as 'elasticsearchClient'

const createCompanyIndex = async () => {
  try {
    const indexExists = await client.indices.exists({
      index: process.env.ELASTIC_COMPANY_INDEX || "company",
    });

    if (!indexExists) {
      await client.indices.create({
        index: process.env.ELASTIC_COMPANY_INDEX || "company",
        body: {
          mappings: {
            properties: {
              company_name: { type: "text" },
              company_type: { type: "keyword" },
              country: { type: "keyword" },
              working_day: { type: "keyword" },
              ot_policy: { type: "keyword" },
              company_size: { type: "keyword" },
              overview: { type: "text" },
              company_website: { type: "keyword" },
              company_facebook: { type: "keyword" },
              brief_overview: { type: "text" },
              id: { type: "keyword" },
            },
          },
        },
      });

      console.log("Company index created successfully.");
    } else {
      console.log("Company index already exists.");
    }
  } catch (error) {
    console.error("Error creating company index:", error);
  }
};

// if (!client.ping()) {
//   logger.error("Elasticsearch is not running", {
//     route: "src/utils/elasticsearch.ts line 18",
//   });
// } else {
createCapstoneIndex();
createJobIndex();
createCompanyIndex();
// }

// Register cleanup logic when the process exits
process.on("exit", () => {
  console.log("Exiting process. Closing Elasticsearch client.");
  client.close(); // Close the Elasticsearch client
});

export default client;
