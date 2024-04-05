import { Router } from "express";

const router = Router();

// import productController from '../controllers/productController.js';

export default ({ ProductController }) => {
    router.get('/', ProductController.list)
    router.get('/:id', ProductController.get)

    return router;
}
