import { database } from 'firebase';

const createProduct = async product => {
  await database()
    .ref('stock')
    .push(product);

  return product;
};

const getStock = async () => {
  const stock = await database()
    .ref('stock')
    .once('value');

  return stock.val();
};

export default { createProduct, getStock };
