import {
  Consumer,
  ConsumerSubscribeTopics,
  Kafka,
  EachMessagePayload,
} from 'kafkajs'
import { Client } from '@elastic/elasticsearch'
import ip from 'ip'
import dotenv from 'dotenv'
import Logger from '../logger'
dotenv.config()

type CustomMessageFormat = {
  index: string;
  event: string;
  data: any;
}
export default class KafkaElasticConsumer {
  private kafkaConsumer: Consumer
  private elasticsearchClient: Client

  public constructor() {
    this.kafkaConsumer = this.createKafkaConsumer()
    this.elasticsearchClient = new Client({ node: process.env.ELASTIC_BASEURL || 'localhost:9200' }) // Update the Elasticsearch node URL
  }

  public async startConsumer(): Promise<void> {
    const topics = process.env.KAFKA_TOPICS?.split(',') || ["job", "company"]
    console.log(process.env.KAFKA_TOPICS?.split(','))
    const topic: ConsumerSubscribeTopics = {
      topics: topics,
      fromBeginning: false,
    }

    try {
      await this.kafkaConsumer.connect()
      await this.kafkaConsumer.subscribe(topic)

      await this.kafkaConsumer.run({
        eachMessage: async (messagePayload: EachMessagePayload) => {
          const { topic, partition, message } = messagePayload
          const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`
          console.log(`- ${prefix} ${message.key}#${message.value}`)
          try {
            const body: CustomMessageFormat = JSON.parse(message.value.toString());
            // Process the message (Example: push it to Elasticsearch)
            console.log(`Processing message: ${JSON.stringify(body)}`);
            await this.createIndexIfNotExists(body.index);
            if (body.event === 'CREATE') {
              await this.pushToElasticsearch(body.index, JSON.stringify(body.data));
            }
            if (body.event === 'BULK') {

            }
            if (body.event === 'UPDATE') {

            }
            if (body.event === 'DELETE') {

            }
          } catch (error) {
            console.error(`Error parsing JSON or processing message: ${error}`);
          }
        },
      })
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  public async shutdown(): Promise<void> {
    await this.kafkaConsumer.disconnect()
  }
  private async createIndexIfNotExists(index: string) {
    try {
      const indexExists = await this.elasticsearchClient.indices.exists({
        index: index,
      });

      if (!indexExists) {
        await this.elasticsearchClient.indices.create({
          index: index,
        });

        console.log(`Index '${index}' created successfully.`);
      }
    } catch (error) {
      console.error(`Error creating index '${index}':`, error);
    }
  };
  private async pushToElasticsearch(index: string, data: string): Promise<void> {
    try {
      // Adjust this logic based on your actual data structure and Elasticsearch index
      const body = JSON.parse(data)
      await this.elasticsearchClient.index({
        index: index,
        id: body.id,
        body: body,
      }).then((response) => {
        console.log(`Data pushed to Elasticsearch successfully. Response: ${JSON.stringify(response)}`);
      }).catch((error) => {
        console.error('Error pushing data to Elasticsearch:', error);
      })
    } catch (error) {
      console.error('Error pushing data to Elasticsearch:', error)
    }
  }

  private async bulkPushToElasticsearch(index: string, data: string[]): Promise<void> {
    try {
      // Adjust this logic based on your actual data structure and Elasticsearch index
      const index = process.env.ELASTICSEARCH_INDEX || 'capstone'
      const operations = data.flatMap(doc => {
        const docID = JSON.parse(doc.toString()).data.id;
        return [{ index: { _index: index, _id: docID } }, doc];
      })

      await this.elasticsearchClient.bulk({
        index,
        operations,
      })

      console.log('Data pushed to Elasticsearch successfully.')
    } catch (error) {
      console.error('Error pushing data to Elasticsearch:', error)
    }
  }

  private async updateToElasticsearch(index: string, data: string): Promise<void> {
    try {
      const body = JSON.parse(data)
      await this.elasticsearchClient.update({
        index: index,
        id: body.id,
        body: {
          doc: body,
        },
      }).then((response) => {
        console.log(`Data updated in Elasticsearch successfully. Response: ${JSON.stringify(response)}`);
      }).catch((error) => {
        console.error('Error updating data in Elasticsearch:', error);
      })
    } catch (error) {
      console.error('Error updating data in Elasticsearch:', error)
    }
  }
  private createKafkaConsumer(): Consumer {
    const kafka = new Kafka({
      clientId: process.env.KAFKA_CLIENTID || 'capstone-consumer',
      brokers: [`${process.env.HOST_IP || ip.address()}:${process.env.KAFKA_PORT || 9092}`],
      connectionTimeout: 3000,
      requestTimeout: 25000,
      enforceRequestTimeout: false,
      retry: {
        initialRetryTime: 100,
        retries: 8,
      },
    })
    const consumer = kafka.consumer({ groupId: 'consumer-group' })
    return consumer
  }
}
