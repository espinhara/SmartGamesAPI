

export default class ProductService {
    constructor({ ProductRepository }) {
        this.ProductRepository = ProductRepository;
    }

    async list() {
        return this.ProductRepository.list()
    }

    async get(id) {
        return this.ProductRepository.get(id)
    }
}