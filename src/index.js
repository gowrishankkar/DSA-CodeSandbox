function testFunction(A) {
  let num = Number(A.join(""));
  let rusNum = num + 1;
  let result = rusNum.toString().split('');
  console.log("A", A);
  console.log("string", rusNum + 1);
  console.log("string", result);
  // return string.toString().split(",");
  // let n = A.length;
  // let leftMax = [];
  // let rightMax = [];
  // leftMax[0] = A[0];
  // for (let i = 1; i < n; i++) {
  //   leftMax[i] = Math.max(leftMax[i - 1], A[i]);
  // }
  // rightMax[n - 1] = A[n - 1];
  // for (let i = n - 2; i >= 0; i--) {
  //   rightMax[i] = Math.max(rightMax[i + 1], A[i]);
  // }
  // console.log("leftMax", leftMax);
  // console.log("rightMax", rightMax);
  // let ans = 0;
  // for (let i = 0; i < n; i++) {
  //   // if (leftMax[i - 1] && rightMax[i + 1]) {
  //   ithValue = Math.min(leftMax[i - 1] || 0, rightMax[i + 1] || 0) - A[i];
  //   console.log("ithValue", ithValue);
  //   ans += Math.max(ithValue, 0);
  //   // }
  // }
  // return ans;
}

console.log("test");
console.log(testFunction([2, 5, 6, 8, 6, 1, 2, 4, 5]));
