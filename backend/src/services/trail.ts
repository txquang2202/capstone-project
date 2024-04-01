import { credentials } from "@grpc/grpc-js";
import { TrailServiceClient } from "../grpc/protos/trail";

export class TrailApiClient {
  private client: TrailServiceClient;
  constructor() {
    this.client = new TrailServiceClient(
      process.env.TRAIL_SERVICE_URL || "localhost:50051",
      credentials.createInsecure(),
    );
  }

  listTrails() {
    return new Promise((resolve, reject) => {
      this.client.listTrails({}, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response.trails);
        }
      });
    });
  }
}
