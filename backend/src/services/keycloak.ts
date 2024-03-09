//global helper method :

import KeycloakAdminClient from "@keycloak/keycloak-admin-client";

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
      baseUrl: "http://localhost:8080",
      realmName: "itviec",
      clientId: "backend",
      clientSecret: "j788xF7vYJRPubFHAOvAi6WZoXFX3aR9",
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
      // username: "admin",
      // password: "admin",
      // grantType: "password",
      // clientId: this.config.clientId,
    });
  }

  async authenticateAndGetToken() {
    try {
      await this.keycloak.auth({
        grantType: "client_credentials",
        clientId: this.config.clientId,
        clientSecret: this.config.clientSecret,
      });

      return this.keycloak.accessToken;
    } catch (error: any) {
      console.error("Error authenticating:", error.message);
      throw error;
    }
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
