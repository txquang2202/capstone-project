import { ContextInterface } from "../context";
const { GraphQLUpload } = require("graphql-upload-minimal");

const Query = {
  trails: (_: any, __: any, { trail }: ContextInterface) => {
    return trail.listTrails();
  },
};

const Mutation = {
  createTrail: async (
    _: any,
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

const Trail = {
  actorData: async (
    { actor }: { actor: string },
    _: any,
    { keycloak }: ContextInterface,
  ) => {
    return await keycloak.getUserData(actor);
  },
};

export default { Query, Mutation, Upload: GraphQLUpload, Trail };
