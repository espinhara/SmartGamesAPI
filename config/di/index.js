import { createContainer } from 'awilix'

import Product from './product.js'

const container = createContainer();

container.register(Product);


export const cradle = container.cradle;
export default container;

