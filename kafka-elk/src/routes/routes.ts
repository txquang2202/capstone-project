import HealthHadler from '@/handlers/health/health.handler'
import { Router } from 'express'

const router: Router = Router()
const healthHadler = new HealthHadler()

router.get('/health', healthHadler.health)

export { router }
