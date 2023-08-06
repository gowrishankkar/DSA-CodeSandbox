test([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
function test(A) {
  let N = A.length;
  let M = A[0].length;
  let result = new Array(2 * N - 1).fill([]);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      let loc = result[i + j];
      result[i + j] = [...loc, A[i][j]];
    }
  }

  let final = [];
  result.map((ele) => {
    let rev = ele.reverse();
    let arr = [];
    for (let i = 0; i < M; i++) {
      if (ele[i]) arr.push(ele[i]);
      else arr.push(0);
    }
    final.push(arr);
  });
}
