import { kafka } from '@/utils/kafka'
import Logger from '@/utils/logger'

const topic = process.env.TOPIC
const app = process.env.APP_NAME

export const consumer = async (): Promise<void> => {
  const consumer = kafka.consumer({ groupId: `${app}` })

  await consumer.connect()
  await consumer.subscribe({ topic, fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, message, partition }) => {

    },
  })
}
