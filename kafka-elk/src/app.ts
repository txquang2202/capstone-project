import express, { Application } from 'express'
import Logger from '@/utils/logger'
import morganMiddleware from '@/middleware/morgan.middleware'
import { router } from '@/routes/routes'
import cors from 'cors'
import { consumer } from './utils/kafka/consumer'
// import { connect } from '@/lib/mongoose/mongoose-connect'
import dotenv from 'dotenv';
dotenv.config();

const app: Application = express()
const port = process.env.PORT
const url = process.env.APP_URL

app.use(cors())
app.disable('x-powered-by')
app.use(express.json())
app.use(morganMiddleware)
app.use(router)

// connect()
//   .then(() => Logger.info('Database connected'))
//   .catch(Logger.error)

consumer().catch(Logger.error)

app.listen(port, () =>
  Logger.debug(`Server is up and running @ ${url}:${port}`)
)
