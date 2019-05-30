import { database } from 'firebase';

const createProduct = async (product) => {
  await database().ref('stock').set(product);
  console.log('New product saved on database.');
};

export default { createProduct };
