import { producer } from '@/utils/kafka/producer'
import { fail, success } from '@/utils/response-helpers';
import { Request, Response } from 'express'
import { CompressionTypes } from 'kafkajs'
import { v4 as uuidv4 } from 'uuid'
import Logger from '@/utils/logger'
export default class KafkaHandler {
  public async send(req: Request, res: Response): Promise<Response> {
    try {
      if (!req.body || !('message' in req.body)) {
        Logger.error('Invalid request');
        return res.status(400).json(fail('Invalid request'));
      }

      const { topic, message } = req.body;

      const key = uuidv4();
      const prod = await producer();
      await prod.send({
        topic,
        messages: [{ value: JSON.stringify(message), key }],
        compression: CompressionTypes.GZIP,
      });

      Logger.info(`Successfully sent message to Kafka topic: ${topic}, key: ${key}`);
      return res.status(200).json(success('Successfully sent message to Kafka'));
    } catch (error) {
      Logger.error('Error sending message to Kafka:', error);
      return res.status(500).json(fail('Error sending message to Kafka'));
    }
  }
}
