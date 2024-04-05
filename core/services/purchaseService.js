export default class PurchaseService {
    constructor({ PurchaseRepository }) {
        this.PurchaseRepository = PurchaseRepository;
    }

    async list() {
        return this.PurchaseRepository.list();
    }

    async get(id) {
        return this.PurchaseRepository.get(id);
    }

    async save(model) {
        return await this.PurchaseRepository.save(model);
    }
}