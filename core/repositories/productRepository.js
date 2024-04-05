import Product from '../models/product.js';

export default class ProductRepository {
    async get(id) {
        const product = await Product.findById(id);

        if (product) return { status: 200, product }
        else return { status: 404, message: 'Product Not Found' }
    }
    async list() {
        const products = await Product.find();
        if (products) return { status: 200, products }
        else return { status: 404, message: 'Products Not Found' }
    }
}