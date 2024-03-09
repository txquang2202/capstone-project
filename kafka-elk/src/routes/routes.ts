import HealthHadler from '@/handlers/health/health.handler'
import KafkaHandler from '@/handlers/kafka/kafka.handler';
import { Router } from 'express'

const router: Router = Router()
const healthHadler = new HealthHadler();
const kafkaHandler = new KafkaHandler()

router.get('/health', healthHadler.health)
router.post('/kafka/send', kafkaHandler.send)

export { router }
