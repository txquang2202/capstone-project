import { ApolloError } from "apollo-server-errors";

/**
 * Creates an Apollo error
 * @param {string} message - Error message
 * @param {string} code - Error code
 */
export class CustomError extends ApolloError {
  constructor(message: string, code: string) {
    super(message, code);

    Object.defineProperty(this, "name", { value: "CustomError" });
  }
}
