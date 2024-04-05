import Purchase from '../models/purchase.js';

export default class PurchaseRepository {
    async get(id) {
        const purchase = await Purchase.findById(id);
        if (purchase) return { status: 200, purchase }
        else return { status: 404, message: 'Purchase Not Found' }
    }
    async list() {
        const purchases = await Purchase.find();
        if (purchases) return { status: 200, purchases }
    }
    async save(model) {
        try {
            let purchase = new Purchase(model)
            model._id = purchase._id;

            return { status: 200, model }
        } catch (error) {
            return { status: 500, message: 'Internal Server Error' }
        }
    }
}