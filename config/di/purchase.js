import { asClass, asFunction } from 'awilix';

import PurchaseRepository from '../../core/repositories/purchaseRepository.js';
import PurchaseService from '../../core/services/purchaseService.js';
import PurchaseController from '../../api/controllers/purchaseController.js';

export default {
    PurchaseRepository: asClass(PurchaseRepository).singleton(),
    PurchaseService: asClass(PurchaseService).singleton(),
    PurchaseController: asFunction(PurchaseController).singleton()
}
