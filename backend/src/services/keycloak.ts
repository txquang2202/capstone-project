//global helper method :

import KeycloakAdminClient from "@keycloak/keycloak-admin-client";
require("dotenv").config();

export interface KeycloakConfig {
  baseUrl: string;
  realmName: string;
  clientId: string;
  clientSecret: string;
}

export class KeycloakApiClient {
  private config: KeycloakConfig;
  private keycloak;

  constructor(
    config: KeycloakConfig = {
      baseUrl: process.env.KEYCLOAK_BASE_URL || "http://localhost:8080",
      realmName: process.env.KEYCLOAK_REALM_NAME || "master",
      clientId: process.env.KEYCLOAK_CLIENT_ID || "admin-cli",
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET || "admin-cli-secret",
    },
  ) {
    this.config = config;
    this.keycloak = new KeycloakAdminClient({
      baseUrl: this.config.baseUrl,
      realmName: this.config.realmName,
    });
  }

  async init() {
    await this.keycloak.auth({
      grantType: "client_credentials",
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret,
    });
  }

  async getUserData(userId: string): Promise<any> {
    try {
      const user = await this.keycloak.users.findOne({ id: userId });
      return user;
    } catch (error: any) {
      console.error("Error getting user data:", error.message);
      throw error;
    } finally {
      // Close the KeycloakAdminClient to release resources
      // this.keycloak.authenticated && this.keycloak.authenticated();
    }
  }
}

const keycloakApiClient = new KeycloakApiClient();
keycloakApiClient.init();
export default keycloakApiClient;
