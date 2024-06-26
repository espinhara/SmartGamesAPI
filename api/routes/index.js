import { Router } from 'express';
import ProductRoute from './productRoute.js'
import PurchaseRoute from './purchaseRoute.js'
import { cradle } from '../../config/di/index.js'
const router = Router();

router.use('/products', ProductRoute(cradle))
router.use('/purchases', PurchaseRoute(cradle))

export default router
