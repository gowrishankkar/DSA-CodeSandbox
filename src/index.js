// let arr = [0, 1, 2, 3, 4];
// let resultArr = [];
// for (let i = 0; i < arr.length; i++) {
//   let localArr = i == 0 ? [arr[0]] : [];
//   for (let j = i; j < arr.length; j++) {
//     let newArr = [...localArr, arr[j]];
//     localArr.push(newArr);
//   }
//   console.log("localArr", localArr);
// }

// let i = 1;
// let n = 4;
// for (let i = 0; i < n; i++) {
//   console.log("loop1", i);

// }
// let B = 9
// let arr = [ 20, 3, 13, 5, 10, 14, 8, 5, 11, 9, 1, 11 ]
// let n = arr.length;
// let minIndex = 0;
// let min = Number.MAX_VALUE;
// // console.log('B', B)
// for (let start = 0; start <= n - B; start++) {
//   let sum = 0;
//   for (let end = start; end < start + B; end++) {
//     sum += arr[end];
//   }
//   if (sum < min) {
//     min = sum;

//     minIndex = start;

//   }
//   console.log(start, 'min', min)
// }
// // return minIndex
// console.log(minIndex, "result");
// let n = 1000;
// let iIterattions = [];
// let jIterattions = [];
// for (let i = 3; i < n / 3; i += 3) {
//   // console.log("i", i);  333/3
//   iIterattions.push(i);
//   for (let j = 2; j < n / 2; j += 2) {
//     // console.log("j", j);
//     jIterattions.push(j);
//   }
// }
// console.log("iIterattions", iIterattions);
// console.log("jIterattions", jIterattions);

// (n/3)/3 = n/9
// (n/2)/2 = n/4

// (n/9)*(n/4)  = n^2 / 36

// let arr = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 2, 3, 4]
// ];
// colSum(arr);
// function colSum(A) {
//   let rowLen = A.length;
//   let colLen = A[0].length;
//   let result = [];
//   for (let c = 0; c < colLen; c++) {
//     let sum = 0;
//     for (let r = 0; r < rowLen; r++) {
//       sum += A[r][c];
//     }
//     result.push(sum);
//   }

//   console.log("result", result);
// }

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// test(arr);
// function test(A) {
//   let rowLen = A.length;
//   let colLen = A[0].length;
//   // console.log(rowLen, "colLen ", colLen);
//   for (let r = 0; r < rowLen; r++) {
//     console.log("r ", r);
//     for (let c = r + 1; c < colLen; c++) {
//       console.log("c  ", c);
//       // console.log("A[c][r]", c, r);
//       let temp = A[r][c];
//       A[r][c] = A[c][r];
//       A[c][r] = temp;
//     }
//   }
//   // console.log(A);
// }

test([1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
function test(A) {
  // let N = A.length;
  // let leftArr = [];
  // let count = 1;
  // for (let i = 0; i < N; i++) {
  //   if (A[i] === 1) {
  //     leftArr.push(count);
  //     count++;
  //   } else {
  //     leftArr.push(0);
  //     count = 1;
  //   }
  // }
  // let rightArr = [];
  // let rightCount = 1;
  // for (let i = N - 1; i >= 0; i--) {
  //   // console.log(i, A[i]);
  //   if (A[i] === 1) {
  //     rightArr.unshift(rightCount);
  //     rightCount++;
  //   } else {
  //     rightArr.unshift(0);
  //     rightCount = 1;
  //   }
  // }

  // let ans = 0;
  // for (let i = 0; i < N; i++) {
  //   let leftValue = leftArr[i - 1];
  //   let rightValue = rightArr[i + 1];
  //   if (i == 0) {
  //     leftValue = 0;
  //   }
  //   if (i == N - 1) {
  //     leftValue = leftArr[N - 2];
  //     rightValue = 0;
  //   }

  //   if (A[i] === 0) {
  //     ans = Math.max(ans, leftValue + rightValue + 1);
  //   }
  // }

  let n = A.length;
  let total = 0;
  let maxLength = 0;
  for (let i = 0; i < n; i++) {
    let l = 0;
    let r = 0;
    if (A[i] == 0) {
      l = 0;
      for (let j = i - 1; j >= 0; j--) {
        if (A[j] == 1) {
          l++;
        } else {
          break;
        }
      }

      r = 0;
      for (let j = i + 1; j < n; j++) {
        if (A[j] == 1) {
          r++;
        } else {
          break;
        }
      }
      if (maxLength < l + r) {
        maxLength = l + r;
      }
    } else {
      total++;
    }
  }

  if (maxLength == 0) {
    return total;
  }
  // return total > maxLength ? maxLength + 1 : maxLength

  console.log("rightArsdr", total > maxLength ? maxLength + 1 : maxLength);
}
