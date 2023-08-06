let A = [
  [1, 2],
  [3, 4],
];
let B = [
  [5, 6],
  [7, 8],
];

mulMat(A, B)
function mulMat(mat1, mat2) {
  var R1 = mat1.length;
  var R2 = mat2.length;
  //var C1 = mat1[0].length
  var C2 = mat2[0].length;
  var result = Array(R1)
    .fill([])
    .map(() => new Array(C2).fill(0));
  console.log("Multiplication of given two matrices is:", result);

  for (let i = 0; i < R1; i++) {
    for (let j = 0; j < C2; j++) {
    //   result[i][j] = 0;
      for (let k = 0; k < R2; k++) {
        result[i][j] += mat1[i][k] * mat2[k][j];
      }
      // console.log(result[i][j] + " ");
    }
    // console.log("");
  }
  console.log('result', result)
  return result;
}
