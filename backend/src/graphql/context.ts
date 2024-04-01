import { TrailApiClient } from "./../services/trail";
import { PrismaClient } from "@prisma/client";
import { RedisClient } from "redis";
import { Client } from "@elastic/elasticsearch";
import ProducerFactory from "src/utils/kafka";
import { KeycloakApiClient } from "src/services/keycloak";
import { MailerApiClient } from "src/services/mailer";

export interface AuthUser {
  name: string;
  preferred_username: string;
  email_verified: boolean;
  given_name: string;
  family_name: string;
  email: string;
  sid: string;
  scope: string;
  iat: number;
  auth_time: number;
  jti: string;
  iss: string;
  aud: string;
  sub: string;
  azp: string;
  session_state: string;
  realm_access: {
    roles: string[];
  };
}

export interface ContextInterface {
  prisma: PrismaClient;
  redis: RedisClient;
  elastic: Client;
  kafkaProducer: ProducerFactory;
  authUser: AuthUser;
  keycloak: KeycloakApiClient;
  mailer: MailerApiClient;
  // no need to authenticate, using for testing api
  isRoot: boolean;
  trail: TrailApiClient;
}
