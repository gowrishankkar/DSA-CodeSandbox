// function testFunction(A) {
//   let num = Number(A.join(""));
//   let rusNum = num + 1;
//   let result = rusNum.toString().split('');
//   console.log("A", A);
//   console.log("string", rusNum + 1);
//   console.log("string", result);
//   // return string.toString().split(",");
//   // let n = A.length;
//   // let leftMax = [];
//   // let rightMax = [];
//   // leftMax[0] = A[0];
//   // for (let i = 1; i < n; i++) {
//   //   leftMax[i] = Math.max(leftMax[i - 1], A[i]);
//   // }
//   // rightMax[n - 1] = A[n - 1];
//   // for (let i = n - 2; i >= 0; i--) {
//   //   rightMax[i] = Math.max(rightMax[i + 1], A[i]);
//   // }
//   // console.log("leftMax", leftMax);
//   // console.log("rightMax", rightMax);
//   // let ans = 0;
//   // for (let i = 0; i < n; i++) {
//   //   // if (leftMax[i - 1] && rightMax[i + 1]) {
//   //   ithValue = Math.min(leftMax[i - 1] || 0, rightMax[i + 1] || 0) - A[i];
//   //   console.log("ithValue", ithValue);
//   //   ans += Math.max(ithValue, 0);
//   //   // }
//   // }
//   // return ans;
// }

// console.log("test");
// console.log(testFunction([2, 5, 6, 8, 6, 1, 2, 4, 5]));

// function test(A) {
//   A.sort((a, b) => a - b);
//   let count = 0;
//   for (let i = 1; i < A.length; i++) {
//     console.log('A', A[i - 1], A[i])
//     if (A[i - 1] < A[i]) {
//       continue;
//     } else {
//       count += A[i - 1] + 1 - A[i];
//       A[i] += A[i - 1] + 1 - A[i];
//     }
//   }
//   return count;
// }

// test([1, 1, 3]);

const lessThan = (arr, k) => {
  // let N = A.length ;
  // let l = 0;
  // let r = N - 1;
  // let count = 0;
  // while (l <= r) {
  //   let mid = Math.floor((l + r) / 2);
  //   if (A[mid] <= B) {
  //     count++;
  //     l = mid + 1;
  //   } else r = mid - 1;
  // }
  // console.log("count", count);
  // return count;

  let count = 0;

  for (let i = 0; i < arr.length ; i++) {
    if (arr[i] <= k) count++;
  }

  console.log("count", count, k);
  return count;
};

function test(A, B) {
  if (A.length <= 1) {
    let mid = B[Math.floor(B.length - 1 / 2)];
    return mid.toFixed(1);
  }
  let l = Math.min(A[0], B[0]);
  let r = Math.max(A[A.length - 1], B[B.length - 1]);
  let result = -1;
  while (l <= r) {
    let m = (l + r) / 2;
    console.log("m", m);
    console.log("l", l);
    console.log("r", r);
    let arr1 = lessThan(A, m);
    let arr2 = lessThan(B, m);
    let total = (A.length + B.length + 1) / 2;

    console.log(arr1 + arr2, "total", total, arr1 + arr2 >= total);
    if (arr1 + arr2 >= total) {
      result = m;
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  console.log(result, "result", result.toFixed(2));
  return result;
}

// console.log(test([1, 4, 5], [2, 3]));
// console.log(test([], [20]));
console.log(test([-50, -41, -40, -19, 5, 21, 28], [-50, -21, -10]));
