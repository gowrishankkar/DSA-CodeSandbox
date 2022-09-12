// // Problem Description
// // Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.
// // A=[2, 1, 6, 4]

// function testFunction(A) {
//   let nums = A;
//   let prevEven = 0;
//   let prevOdd = 0;
//   let nextEven = 0;
//   let nextOdd = 0;

//   for (let index = 0; index < nums.length; index++) {
//     if (index % 2 === 0) {
//       nextEven += nums[index];
//     } else {
//       nextOdd += nums[index];
//     }
//   }
//   // console.log("nextEven", nextEven);
//   // console.log("nextOdd", nextOdd);

//   let indexToRemove = 0;

//   for (let index = 0; index < nums.length; index++) {
//     if (index % 2 === 0) {
//       nextEven -= nums[index];
//     } else {
//       nextOdd -= nums[index];
//     }
//     console.log("nextEven", nextEven);
//     console.log("nextOdd", nextOdd);
//     if (prevEven + nextOdd === prevOdd + nextEven) {
//       indexToRemove++;
//     }

//     if (index % 2 === 0) {
//       prevEven += nums[index];
//     } else {
//       prevOdd += nums[index];
//     }
//   }

//   return indexToRemove;
// }

// console.log(testFunction([2, 1, 6, 4]));

// function test(A, B) {
//   let arr = A;
//   let n = arr.length;
//   let minIndex = 0;

//   // console.log('B', B)
//   let currentSum = 0;
//   for (let j = 0; j < n; j++) {
//     currentSum += arr[j];
//   }
//   let min = currentSum;
//   for (let i = 1; i <= n - B; i++) {
//     currentSum = currentSum + arr[i + B - 1] - arr[i - 1];
//     if (currentSum < min) {
//       min = currentSum;
//       minIndex = i;
//     }
//   }

//   // return minIndex;
//   console.log(minIndex);
// }
// test([3, 7, 90, 20, 10, 50, 40], 3);

// function test(A) {
//   let result = [];
//   let N = A.length;
//   let M = A[0].length;
//   for (let sum = 0; sum <= N + M - 2; sum++) {
//     let diagonalArr = [];
//     for (let r = sum; r >= 0; r--) {
//       c = sum - r;
//       if (r < 0 || c < 0 || r >= N || c >= M) {
//         continue;
//       }
//       // console.log('A[r][c]', A[r][c])
//       diagonalArr.push(A[r][c]);
//     }
//     result.push(diagonalArr);
//   }
//   console.log("result", result);
//   let final = []
//   result.map((ele) => {
//     console.log(ele);
//     let arr= [];
//     for (let i = 0; i < M; i++) {
//       if (ele[i]) arr.push(ele[i]);
//       else arr.push(0);
//     }
//     final.push(arr)
//   });

//   console.log('result2', final)
// }

// test([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]);

// function test(A, B) {
//   let arr = A;
//   let n = arr.length;
//   let minIndex = 0;

//   // console.log('B', B)
//   let currentSum = 0;
//   for (let j = 0; j < B; j++) {
//     console.log("arr[j]", arr[j]);
//     currentSum += arr[j];
//   }

//   let minAvge = currentSum / B;

//   console.log("minAvge", minAvge);
//   for (let i = 1; i <= n - B; i++) {
//     currentSum = currentSum + arr[i + B - 1] - arr[i - 1];
//     if (currentSum / B < minAvge) {
//       minAvge = currentSum / B;
//       minIndex = i;
//     }

//     console.log("currentSum di", currentSum / B, i);
//   }

//   console.log("minIndex", minIndex);
//   return minIndex;
// }

// // test([3, 7, 90, 20, 10, 50, 40], 3);
// test([15, 7, 11, 7, 9, 8, 18, 1, 16, 18, 6, 1, 1, 4, 18], 6);



function test(A, B, C){
  let sum = 0, max = 0;
  const N = C.length;
  if(N == 1) {
      return Number(C[0]);
  }
  let j = 0;
  for(let i = 0; i < N; i++) {
      sum += C[i];
      if(max <= sum && sum <= B) {
          max = sum;
      }
      console.log('sum', sum, max)

      while(sum > B) {
          sum -= C[j];
          if(max <= sum && sum <= B) {
              max = sum;
          }
          j++;
      }
  }

  console.log('max', max)
  return Number(max);
}

test(5, 12, [2, 1, 3, 4, 5])