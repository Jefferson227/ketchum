import { database } from 'firebase';

const createProduct = async product => {
  await database()
    .ref('stock')
    .push(product);

  return product;
};

export default { createProduct };
