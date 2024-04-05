import { createContainer } from 'awilix'

import Product from './product.js'
import Purchase from './purchase.js'

const container = createContainer();

container.register(Product);
container.register(Purchase);


export const cradle = container.cradle;
export default container;

