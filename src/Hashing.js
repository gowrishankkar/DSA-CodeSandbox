function test(A, B) {
  var lengthNums = A.length;
  let result = [];
  let finalresult = [];

  for (var i = 0; i < lengthNums - 1; i++) {
    for (var j = i; j < lengthNums; j++) {
      if (A[i] + A[j] === B) result.push([i + 1, j + 1]);
    }
  }

  if (result.length) {
    let minimumIndex2 = [];
    let minIndex2Value = result[0][1];
    for (let k = 0; k < result.length; k++) {
      if (result[k][1] < minIndex2Value) {
        minIndex2Value = result[k][1];
        minimumIndex2.push([result[k][0], result[k][1]]);
      }
    }
    finalresult = minimumIndex2;

    if (minimumIndex2.length > 1) {
      let minimumIndex1 = [];
      let minIndex1Value = minimumIndex2[0][1];
      for (let k = 0; k < result.length; k++) {
        if (result[k][0] < minIndex1Value) {
          minIndex1Value = result[k][0];
          minimumIndex1.push([result[k][0], result[k][1]]);
        }
      }
      finalresult = minimumIndex1;
    }
  }

  return finalresult[0] ? finalresult[0] : [];
}

test(
  [
    -5,
    1,
    4,
    -7,
    10,
    -7,
    0,
    7,
    3,
    0,
    -2,
    -5,
    -3,
    -6,
    4,
    -7,
    -8,
    0,
    4,
    9,
    4,
    1,
    -8,
    -6,
    -6,
    0,
    -9,
    5,
    3,
    -9,
    -5,
    -9,
    6,
    3,
    8,
    -10,
    1,
    -2,
    2,
    1,
    -9,
    2,
    -3,
    9,
    9,
    -10,
    0,
    -9,
    -2,
    7,
    0,
    -4,
    -3,
    1,
    6,
    -3
  ],
  -1
);
