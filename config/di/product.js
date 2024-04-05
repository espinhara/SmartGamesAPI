import { asClass, asFunction } from 'awilix';

import ProductRepository from '../../core/repositories/productRepository.js';
import ProductService from '../../core/services/productService.js';
import ProductController from '../../api/controllers/productController.js';

export default {
    ProductRepository: asClass(ProductRepository).singleton(),
    ProductService: asClass(ProductService).singleton(),
    ProductController: asFunction(ProductController).singleton()
}
