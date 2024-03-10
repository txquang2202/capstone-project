import { PrismaClient } from "@prisma/client";
import { RedisClient } from "redis";
import { KeycloakApiClient } from "src/services/keycloak";

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
  authUser: AuthUser;
  keycloak: KeycloakApiClient;
  // no need to authenticate, using for testing api
  isRoot: boolean;
}
