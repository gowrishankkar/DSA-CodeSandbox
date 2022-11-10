// Problem Description
// Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.
// A=[2, 1, 6, 4]

function testFunction(A, B) {
    let arr = A;
    let prefixSum = [arr[0]];
    let len = arr.length;
    let limit = Number(B);
    for (let i = 1; i < len; i++) {
      prefixSum[i] = arr[i] + prefixSum[i - 1];
    }
    let max = [];
    console.log("prefixSum", prefixSum);
    for (let i = 0; i <= limit; i++) {
      let leftSum = 0;
      if (i > 0) {
        leftSum = prefixSum[i - 1];
      }
      console.log("leftSum", leftSum);
      let rightSum = prefixSum[len - 1] - prefixSum[len - 1 - limit + i];
      max.push(leftSum + rightSum);
    }
    return Math.max(...max);
  }
  
  console.log(testFunction([5, -2, 3, 1, 2], 3));
  