import { PrismaClient } from "@prisma/client";
import { RedisClient } from "redis";
import { Client } from "@elastic/elasticsearch";
import { Producer } from "node-rdkafka";

export interface ContextInterface {
  prisma: PrismaClient;
  redis: RedisClient;
  elastic: Client;
  kafkaProducer: Producer;
}
