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
  index: string
  event: string
  data: any
}

const EVENT = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  BULK: 'BULK',
}
export default class KafkaElasticConsumer {
  private kafkaConsumer: Consumer
  private elasticsearchClient: Client

  public constructor() {
    this.kafkaConsumer = this.createKafkaConsumer()
    this.elasticsearchClient = new Client({
      node: process.env.ELASTIC_BASEURL || 'localhost:9200',
      auth: {
        username: process.env.ELASTIC_USERNAME || 'elastic',
        password: process.env.ELASTIC_PASSWORD || '',
      },
      tls: {
        ca: process.env.ELASTIC_CA_CERT || '',
        rejectUnauthorized: false,
      },
    }) // Update the Elasticsearch node URL
  }

  public async startConsumer(): Promise<void> {
    const topics = process.env.KAFKA_TOPICS?.split(',') || ['job', 'company']
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
          Logger.info(`- ${prefix} ${message.key}#${message.value}`)
          try {
            const body: CustomMessageFormat = JSON.parse(
              message.value.toString()
            )
            // Process the message (Example: push it to Elasticsearch)
            console.log(`Processing message: ${JSON.stringify(body)}`)
            await this.createIndexIfNotExists(body.index)
            if (body.event === EVENT.CREATE) {
              await this.pushToElasticsearch(
                body.index,
                JSON.stringify(body.data)
              )
            }
            if (body.event === EVENT.BULK) {
              const body: CustomMessageFormat[] = JSON.parse(
                message.value.toString()
              )
              const data = body.map((b) => JSON.stringify(b.data))
              await this.bulkPushToElasticsearch(body[0].index, data)
            }
            if (body.event === EVENT.UPDATE) {
              await this.updateToElasticsearch(
                body.index,
                JSON.stringify(body.data)
              )
            }
            if (body.event === EVENT.DELETE) {
              await this.deleteFromElasticsearch(
                body.index,
                JSON.stringify(body.data)
              )
            }
          } catch (error) {
            Logger.error(`Error parsing JSON or processing message: ${error}`)
          }
        },
      })
    } catch (error) {
      Logger.error('Error: ', error)
    }
  }

  public async shutdown(): Promise<void> {
    await this.kafkaConsumer.disconnect()
  }
  private async createIndexIfNotExists(index: string) {
    try {
      const indexExists = await this.elasticsearchClient.indices.exists({
        index: index,
      })

      if (!indexExists) {
        await this.elasticsearchClient.indices.create({
          index: index,
        })

        Logger.info(`Index '${index}' created successfully.`)
      }
    } catch (error) {
      Logger.error(`Error creating index '${index}':`, error)
    }
  }
  private async pushToElasticsearch(
    index: string,
    data: string
  ): Promise<void> {
    try {
      // Adjust this logic based on your actual data structure and Elasticsearch index
      const body = JSON.parse(data)
      await this.elasticsearchClient
        .index({
          index: index,
          id: body.id,
          body: body,
        })
        .then((response) => {
          Logger.info(
            `Data pushed to Elasticsearch successfully. Response: ${JSON.stringify(
              response
            )}`
          )
        })
        .catch((error) => {
          Logger.error('Error pushing data to Elasticsearch:', error)
        })
    } catch (error) {
      Logger.error('Error pushing data to Elasticsearch:', error)
    }
  }

  private async bulkPushToElasticsearch(
    index: string,
    data: string[]
  ): Promise<void> {
    try {
      const body = data.map((d) => JSON.parse(d))
      await this.elasticsearchClient
        .bulk({
          index: index,
          body: body,
        })
        .then((response) => {
          Logger.info(
            `Data pushed to Elasticsearch successfully. Response: ${JSON.stringify(
              response
            )}`
          )
        })
        .catch((error) => {
          Logger.error('Error pushing data to Elasticsearch:', error)
        })
    } catch (error) {
      console.error('Error pushing data to Elasticsearch:', error)
    }
  }

  private async updateToElasticsearch(
    index: string,
    data: string
  ): Promise<void> {
    try {
      const body = JSON.parse(data)
      await this.elasticsearchClient
        .update({
          index: index,
          id: body.id,
          body: {
            doc: body,
          },
        })
        .then((response) => {
          Logger.info(
            `Data updated in Elasticsearch successfully. Response: ${JSON.stringify(
              response
            )}`
          )
        })
        .catch((error) => {
          Logger.error('Error updating data in Elasticsearch:', error)
        })
    } catch (error) {
      Logger.error('Error updating data in Elasticsearch:', error)
    }
  }

  private async deleteFromElasticsearch(
    index: string,
    data: string
  ): Promise<void> {
    try {
      const body = JSON.parse(data)
      await this.elasticsearchClient
        .delete({
          index: index,
          id: body.id,
        })
        .then((response) => {
          Logger.info(
            `Data deleted from Elasticsearch successfully. Response: ${JSON.stringify(
              response
            )}`
          )
        })
        .catch((error) => {
          Logger.error('Error deleting data from Elasticsearch:', error)
        })
    } catch (error) {
      Logger.error('Error deleting data from Elasticsearch:', error)
    }
  }

  private createKafkaConsumer(): Consumer {
    const kafka = new Kafka({
      clientId: process.env.KAFKA_CLIENTID || 'capstone-consumer',
      brokers: [
        `${process.env.HOST_IP || ip.address()}:${
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
    })
    const consumer = kafka.consumer({ groupId: 'consumer-group' })
    return consumer
  }
}
