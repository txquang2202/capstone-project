import { PrismaClient } from "@prisma/client";
import { RedisClient } from "redis";
import { Client } from "@elastic/elasticsearch";

export interface ContextInterface {
  prisma: PrismaClient;
  redis: RedisClient;
  elastic: Client;
}
