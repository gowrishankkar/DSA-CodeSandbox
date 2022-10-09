function test(A) {
  let object = new Map();
  A = A.toString();
  for (let i = 0; i < A.length; i++) {
    let product = 1;
    for (let j = i; j < A.length; j++) {
      product = product * Number(A[j]);
      if (!object.has(product)) {
        object.set(product, 1);
      } else {
        object.set(product, object.get(product) + 1);
      }
    }
  }
  console.log('object', object)
  for (let key in object) {
    console.log(object.get(key), 'object[key]')
    if (object.get(key) > 1) {
      return 0;
    }
  }
  return 1;
}

test(123);
