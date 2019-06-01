import { database } from 'firebase';
import helper from './helper';

const createProduct = async product => {
  await database()
    .ref('stock')
    .push(product);

  return product;
};

const getStock = async () => {
  const response = await database()
    .ref('stock')
    .once('value');

  const stock = helper.convertJsonFromFirebase(response.val());
  return stock;
};

export default { createProduct, getStock };
