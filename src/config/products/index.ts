
import { Product } from './types';
import { vegetables } from './vegetables';
import { fruits } from './fruits';
import { eggsAndDairy } from './eggs-and-dairy';
import { meats } from './meats';
import { beverages } from './beverages';
import { honey } from './honey';
import { fertilizer } from './fertilizer';

export type { Product };

export const PRODUCTS: Product[] = [
  ...vegetables,
  ...fruits,
  ...eggsAndDairy,
  ...meats,
  ...beverages,
  ...honey,
  ...fertilizer
];

export default PRODUCTS;
