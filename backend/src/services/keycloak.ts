//global helper method :

import KeycloakAdminClient from "@keycloak/keycloak-admin-client";
import { query } from "express";
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
    console.log("this.config ", this.config);

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
      await this.init();

      // throw error;
      const user = await this.keycloak.users.findOne({ id: userId });
      return user;
    }
  }

  async getAllUsers(): Promise<any> {
    try {
      const users = await this.keycloak.users.find();
      return users;
    } catch (error: any) {
      console.error("Error getting user data:", error.message);
      await this.init();

      // throw error;
      const users = await this.keycloak.users.find();
      return users;
    }
  }

  async addUser(userData: any): Promise<any> {
    try {
      const newUser = await this.keycloak.users.create(userData);
      return newUser;
    } catch (error: any) {
      console.error("Error adding user:", error.message);
      await this.init();
      const newUser = await this.keycloak.users.create(userData);
      return newUser;
    }
  }

  async resetPassword(userId: string, newPass: string): Promise<any> {
    try {
      const resetPassUser = await this.keycloak.users.resetPassword({ id: userId, credential: { type: 'password', value: newPass } });
      return resetPassUser;
    } catch (error: any) {
      console.error("Error adding user:", error.message);
      await this.init();
      const resetPassUser = await this.keycloak.users.resetPassword({ id: userId, credential: { type: 'password', value: newPass } });
      return resetPassUser;
    }
  }

  async editUser(userId: string, userData: any): Promise<any> {
    try {
      const editedUser = await this.keycloak.users.update({ id: userId }, userData);
      return editedUser;
    } catch (error: any) {
      console.error("Error updating user:", error.message);
      await this.init();
      const editedUser = await this.keycloak.users.update({ id: userId }, userData);
      return editedUser;
    }
  }

  async delUser(userId: string): Promise<any> {
    try {
      const editedUser = await this.keycloak.users.del({ id: userId },);
      return editedUser;
    } catch (error: any) {
      console.error("Error deleting user:", error.message);
      await this.init();
      const editedUser = await this.keycloak.users.del({ id: userId },);
      return editedUser;
    }
  }

  async hardDelUser(userId: string): Promise<any> {
    try {
      const editedUser = await this.keycloak.users.del({ id: userId },);
      return editedUser;
    } catch (error: any) {
      console.error("Error deleting user:", error.message);
      await this.init();
      const editedUser = await this.keycloak.users.del({ id: userId },);
      return editedUser;
    }
  }
}

const keycloakApiClient = new KeycloakApiClient();
keycloakApiClient.init();

export default keycloakApiClient;
