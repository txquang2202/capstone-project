import {
  Kafka,
  Message,
  Producer,
  ProducerBatch,
  TopicMessages,
} from "kafkajs";
import Logger from "./logger";
import dotenv from "dotenv";
import ip from "ip";
dotenv.config();

interface CustomMessageFormat {
  index: string;
  event: string;
  data: any;
}
export default class ProducerFactory {
  private producer: Producer;
  private logger: Logger;
  constructor() {
    this.producer = this.createProducer();
    this.logger = new Logger();
  }

  public async start(): Promise<void> {
    try {
      await this.producer.connect();
    } catch (error) {
      this.logger.error("Error connecting the producer: ", error);
    }
  }

  public async shutdown(): Promise<void> {
    await this.producer.disconnect();
  }

  public async healthCheck(): Promise<void> {
    try {
      await this.start();
      await this.send("capstone", {
        index: "capstone",
        event: "health-check",
        data: { id: "test", message: "Producer is ready to send messages." },
      });
      await this.shutdown();
    } catch (error) {
      this.logger.error("Error health checking the producer: ", error);
    }
  }

  public async send(
    topic: string,
    message: CustomMessageFormat,
  ): Promise<void> {
    try {
      await this.start();
      const kafkaMessage: Message = {
        value: JSON.stringify(message),
      };

      await this.producer.send({
        topic: topic,
        messages: [kafkaMessage],
      });
    } catch (error) {
      this.logger.error("Error sending message: ", error);
    } finally {
      await this.shutdown();
    }
  }

  public async sendBatch(
    topic: string,
    messages: Array<CustomMessageFormat>,
  ): Promise<void> {
    try {
      await this.start();
      const kafkaMessages: Array<Message> = messages.map((message) => {
        return {
          value: JSON.stringify(message),
        };
      });

      const topicMessages: TopicMessages = {
        topic: topic,
        messages: kafkaMessages,
      };

      const batch: ProducerBatch = {
        topicMessages: [topicMessages],
      };

      await this.producer.sendBatch(batch);
      await this.shutdown();
    } catch (error) {
      this.logger.error("Error sending batch: ", error);
    } finally {
      await this.shutdown();
    }
  }

  private createProducer(): Producer {
    const kafka = new Kafka({
      clientId: process.env.KAFKA_CLIENT_ID || "capstone",
      brokers: [
        `${process.env.HOST_IP || ip.address()}:${
          process.env.KAFKA_PORT || 9092
        }`,
      ],
    });

    return kafka.producer();
  }
}
