import express, { Application } from 'express'
import Logger from '@/utils/logger'
import morganMiddleware from '@/middleware/morgan.middleware'
import { router } from '@/routes/routes'
import cors from 'cors'
import KafkaElasticConsumer from './utils/kafka/consumer'
import dotenv from 'dotenv'
dotenv.config()

const app: Application = express()
const port = process.env.PORT
const url = process.env.URL

app.use(cors())
app.disable('x-powered-by')
app.use(express.json())
app.use(morganMiddleware)
app.use(router)

const kafkaESConsumer = new KafkaElasticConsumer()
kafkaESConsumer.startConsumer()

// Graceful shutdown
const gracefulShutdown = async () => {
  await kafkaESConsumer.shutdown() // Shutdown the Kafka consumer
  Logger.info('Server shutting down...')
  process.exit(0)
}

// Handle process termination signals
process.on('SIGTERM', gracefulShutdown)
process.on('SIGINT', gracefulShutdown)

app.listen(port, () =>
  Logger.debug(`Server is up and running @ ${url}:${port}`)
)
