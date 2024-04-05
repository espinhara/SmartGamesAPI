import Product from '../models/product.js';

export default class ProductRepository {
    async get(id) {
        return await Product.findById(id);
    }
    async list() {
        return await Product.find();
    }
}