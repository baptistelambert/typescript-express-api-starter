import { Router } from 'express'

import miscRoutes from './miscRoutes'

const router: Router = Router()

router.use('/', miscRoutes)

export default router
