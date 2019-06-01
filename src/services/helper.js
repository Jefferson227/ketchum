const convertJsonFromFirebase = firebaseJson => {
  if (!firebaseJson) return [];

  const firebaseJsonKeys = Object.keys(firebaseJson);
  const stock = [];

  for (let i = 0; i < firebaseJsonKeys.length; i++) {
    const key = firebaseJsonKeys[i];
    const product = firebaseJson[key];
    product.id = key;

    stock.push(product);
  }

  return stock;
};

export default { convertJsonFromFirebase };
