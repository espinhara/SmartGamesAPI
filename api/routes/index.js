import { Router } from 'express';
import ProductRoute from './productRoute.js'
import { cradle } from '../../config/di/index.js'
const router = Router();

router.use('/products', ProductRoute(cradle))

export default router
