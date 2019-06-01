const convertJsonFromFirebase = firebaseJson => {
  const firebaseJsonKeys = Object.keys(firebaseJson);
  const stock = [];

  for (let i = 0; i < firebaseJsonKeys.length; i++) {
    const key = firebaseJsonKeys[i];
    const product = firebaseJson[key];
    stock.push(product);
  }

  return stock;
};

export default { convertJsonFromFirebase };
