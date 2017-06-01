import { Router } from 'express'

import miscRoutes from './routes/miscRoutes'

const router: Router = Router()

router.use('/', miscRoutes)

export default router
