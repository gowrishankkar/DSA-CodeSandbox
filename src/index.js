function test(A, B) {
  // console.log(A, B)
  let arr = new Array(A).fill(0, 0, A);
  console.log("arr", arr);

  for (let i = 0; i < B.length; i++) {
    let rangeStart = B[i][0] - 1;
    let rangeEnd = B[i][1] - 1;
    let value = B[i][2];
    console.log(B[i], rangeStart, rangeEnd, value);
    arr[rangeStart] += value;
    if (rangeEnd + 1 < A) arr[rangeEnd + 1] -= value;
  }

  for (let j = 1; j < A; j++) {
    arr[j] += arr[j - 1];
  }
  console.log("arr", arr);
}

test(5, [
  [1, 2, 10],
  [2, 3, 20],
  [2, 5, 25]
]);
