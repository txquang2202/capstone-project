import {
  Consumer,
  ConsumerSubscribeTopics,
  Kafka,
  EachMessagePayload,
} from 'kafkajs';
import dotenv from 'dotenv';
import Logger from '../logger';
import { DataSource } from 'typeorm';
import { createTrail } from '../../controllers/trail.controller';
dotenv.config();

type CustomMessageFormat = {
  index: string;
  event: string;
  data: any;
};

export default class KafkaConsumer {
  private kafkaConsumer: Consumer;
  private db: DataSource;

  public constructor(db: DataSource) {
    this.kafkaConsumer = this.createKafkaConsumer();
    this.db = db;
  }

  public async startConsumer(): Promise<void> {
    const topics = process.env.KAFKA_TOPICS?.split(',') || ['trail'];
    console.log(process.env.KAFKA_TOPICS?.split(','));
    const topic: ConsumerSubscribeTopics = {
      topics: topics,
      fromBeginning: false,
    };

    try {
      await this.kafkaConsumer.connect();
      await this.kafkaConsumer.subscribe(topic);

      await this.kafkaConsumer.run({
        eachMessage: async (messagePayload: EachMessagePayload) => {
          const { topic, partition, message } = messagePayload;
          const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`;
          Logger.info(`- ${prefix} ${message.key}#${message.value}`);
          try {
            const body: CustomMessageFormat = JSON.parse(
              message.value?.toString() || '{}'
            );
            Logger.info(`Processing message: ${JSON.stringify(body)}`);

            if (body.data) {
              const trail = createTrail(this.db, {
                actor: body.data.actor,
                event: body.data.event,
                targetId: body.data.target_id,
                targetType: body.data.target_type,
              });

              Logger.info(`Trail created: ${JSON.stringify(trail)}`);
            }
            // Process the message (Example: push it to Elasticsearch)
          } catch (error) {
            Logger.error(`Error parsing JSON or processing message: ${error}`);
          }
        },
      });
    } catch (error) {
      Logger.error('Error: ', error);
    }
  }

  public async shutdown(): Promise<void> {
    await this.kafkaConsumer.disconnect();
  }

  private createKafkaConsumer(): Consumer {
    const kafka = new Kafka({
      clientId: process.env.KAFKA_CLIENTID || 'capstone-consumer',
      brokers: [
        `${process.env.HOST_IP || 'localhost'}:${
          process.env.KAFKA_PORT || 9092
        }`,
      ],
      connectionTimeout: 3000,
      requestTimeout: 25000,
      enforceRequestTimeout: false,
      retry: {
        initialRetryTime: 100,
        retries: 8,
      },
    });
    const consumer = kafka.consumer({ groupId: 'consumer-group' });
    return consumer;
  }
}
