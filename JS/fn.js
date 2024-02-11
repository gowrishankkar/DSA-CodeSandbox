let result = [];
let move = 0;
function towerOfHanoi(A) {
  let m = (1 << A) - 1;
  result = Array(m)
    .fill()
    .map((_) => Array(3));
  solve(A, 1, 2, 3);
  return result;
}
function solve(N, source, helper, dist) {
  if (N == 0) {
    return;
  }
  solve(N - 1, source, dist, helper);
  result[move++] = [N, source, dist];
  solve(N - 1, helper, source, dist);
}

const test = towerOfHanoi(3);
console.log("test", test);
