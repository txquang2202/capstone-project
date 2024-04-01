import { sendUnaryData, ServerUnaryCall, status } from '@grpc/grpc-js';
import { DataSource } from 'typeorm';
import * as TrailController from './controllers/trail.controller';
import {
  CreateTrailRequest,
  CreateTrailResponse,
  Trail,
  TrailServiceServer,
  ListTrailsRequest,
  ListTrailsResponse,
} from './protos/dist/trail';

export function getTrailServer(db: DataSource): TrailServiceServer {
  async function createTrail(
    call: ServerUnaryCall<CreateTrailRequest, CreateTrailResponse>,
    callback: sendUnaryData<CreateTrailResponse>
  ) {
    try {
      const trail = await TrailController.createTrail(db, call.request);
      const trailPB = Trail.fromJSON(trail);
      const response: CreateTrailResponse = {
        trail: trailPB,
      };
      callback(null, response);
    } catch (err) {
      callback({ code: status.INTERNAL }, null);
      console.error(err);
    }
  }

  async function listTrails(
    call: ServerUnaryCall<ListTrailsRequest, ListTrailsResponse>,
    callback: sendUnaryData<ListTrailsResponse>
  ) {
    try {
      const trails = await TrailController.listTrails(db);
      const trailsPB = trails.map(Trail.fromJSON);
      const response: ListTrailsResponse = {
        trails: trailsPB,
      };
      callback(null, response);
    } catch (err) {
      callback({ code: status.INTERNAL }, null);
      console.error(err);
    }
  }
  return {
    createTrail,
    listTrails,
  };
}
