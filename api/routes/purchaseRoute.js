import { Router } from "express";

const router = Router();

// import PurchaseController from '../controllers/PurchaseController.js';

export default ({ PurchaseController }) => {
    router.get('/', PurchaseController.list)
    router.get('/:id', PurchaseController.get)
    router.post('/', PurchaseController.save)

    return router;
}
