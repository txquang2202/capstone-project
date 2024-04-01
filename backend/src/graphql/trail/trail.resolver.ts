import { ContextInterface } from "../context";
const { GraphQLUpload } = require("graphql-upload-minimal");

const Query = {
  trails: async () => {
    return [];
  },
};

const Mutation = {
  createTrail: async (
    _,
    {
      input,
    }: {
      input: {
        actor: string;
        event: string;
      };
    },
    { kafkaProducer }: ContextInterface,
  ) => {
    kafkaProducer.send(process.env.KAFKA_TOPIC_TRAIL || "trail", {
      index: "trail",
      event: input.event,
      data: input,
    });
    return true;
  },
};

export default { Query, Mutation, Upload: GraphQLUpload };
