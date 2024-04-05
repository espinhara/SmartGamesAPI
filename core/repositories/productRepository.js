import Product from '../models/product.js';

export default class ProductRepository {
    async get(id) {
        try {
            const product = await Product.findById(id);

            return { status: 200, product }
        } catch (error) {
            return { status: 404, message: 'Product Not Found' }
        }
    }
    async list() {
        const products = await Product.find();
        if (products) return { status: 200, products }
        else return { status: 404, message: 'Products Not Found' }
    }
}