import { Router } from 'express'

import MiscController from '../controllers/MiscController'

const miscController: MiscController = new MiscController()
const router: Router = Router()

router.get('/', miscController.rootHandler)
router.use('*', miscController.notFoundHandler)

export default router
