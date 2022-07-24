let arr = [2, 3, 4, 3, 4, 4, 1];
let B = 6;
let len = arr.length;
let prefixSum = [arr[0]];
for (let i = 1; i < len; i++) {
  prefixSum[i] = arr[i] + prefixSum[i - 1];
}
console.log("prefixSum", prefixSum);
let max = [];
for (let i = 0; i <= Number(B); i++) {
  let leftSum = i == 0 ? 0 : prefixSum[i - 1];
  // console.log("leftSum", leftSum);
  let rightSum = prefixSum[len - 1] - prefixSum[len - B + i - 1];
  console.log(i, prefixSum[len - 1], "rightSum", len - B + i - 1);
  max.push(rightSum + leftSum);
}

console.log("max", Math.max(...max), len);
