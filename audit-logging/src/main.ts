import {
  Server,
  ServerCredentials,
  loadPackageDefinition,
} from '@grpc/grpc-js';
import { loadSync } from '@grpc/proto-loader';
import { ReflectionService } from '@grpc/reflection';
import path from 'path';
import 'reflect-metadata';
import dataSource from './db';
import { getTrailServer } from './server';
import KafkaConsumer from './utils/kafka/consumer';

const HOST = process.env.HOST || 'localhost';
const PORT = Number(process.env.PORT) || 50051;

const address = `${HOST}:${PORT}`;
const server = new Server();
const PROTO_PATH = path.join(__dirname, './protos/src/trail.proto');
const packageDefinition = loadSync(PROTO_PATH);
const proto = loadPackageDefinition(packageDefinition);
const reflectionService = new ReflectionService(packageDefinition);
reflectionService.addToServer(server);

dataSource
  .initialize()
  .then((db) => {
    server.addService(
      (proto.trail as any).TrailService.service,
      getTrailServer(db)
    );

    server.bindAsync(
      address,
      ServerCredentials.createInsecure(),
      (error, port) => {
        if (error) {
          throw error;
        }
        console.log('server is running on', port);
        server.start();
      }
    );

    const kafkaESConsumer = new KafkaConsumer(db);
    kafkaESConsumer.startConsumer();

    // Graceful shutdown
    const gracefulShutdown = async () => {
      await kafkaESConsumer.shutdown(); // Shutdown the Kafka consumer
      console.log('Server shutting down...');
      process.exit(0);
    };

    // Handle process termination signals
    process.on('SIGTERM', gracefulShutdown);
    process.on('SIGINT', gracefulShutdown);
  })
  .catch((error) => console.log(error));
