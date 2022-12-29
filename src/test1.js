// function test(A) {
//   let maxMod = 0;
//   for (let i = 0; i < A.length - 1; i++) {
//     for (let j = i + 1; j < A.length; j++) {
//       if (A[i] > maxMod) break;
//       let mod = A[i] % A[j];
//       console.log(A[i], ",", A[j], "mod", mod);

//       //   console.log("mod", mod);
//       if (mod > maxMod) {
//         maxMod = mod;
//       }
//     }
//   }
//   console.log("maxMod ", maxMod);
//   return maxMod;
// }
// let arr = [683, 354, 95, 937, 78, 246, 319, 516, 913, 112];
// test(arr);

// function tets(A) {
//   let newArray = [];
//   console.log(A.length);
//   let zeArry = [];
//   A.forEach((ele) => {
//     console.log("ele", ele);
//     if (ele === 0) zeArry.push(0);
//     else newArray.push(ele);
//   });
//   console.log(zeArry, "newArray", newArray.concat(zeArry));
// }
// tets([0, 1, 2, 3]);

// function tets(A, B) {
//     console.log(A, B)
//   let length = A.length;
//   let currSum = 0
//   for (let i = 0; i < B; i++) {
//     currSum += A[i]
//   }
//   console.log('currSum', currSum)
//   for (let j = length; j > length - B; j--) {
//     console.log( j);
//   }
// }
// tets([5, -2, 3, 1, 2], 3);

// function tt(A) {
//   let current = A[0];
//   for (let i = 0; i < A.length - 1; i++) {
//     if (A[i] < A[i + 1]) current = A[i + 1];
//   }
//   console.log("test", current);
// }
// tt([1, 2, 3, 4]);

// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return factorial(n - 1) * n;
// }

// console.log(factorial(5));

// let arr = [4, 5, 6, 9, 4, 1, 8, 3];
// let b = [
//   [2, 4],
//   [7, 8],
//   [1, 4],
//   [1, 6]
// ];
// let prefixSumArr = [arr[0]];
// for (let i = 1; i < arr.length; i++) {
//   prefixSumArr[i] = prefixSumArr[i - 1] + arr[i];
// }
// let result = [];
// for (let i = 0; i < b.length; i++) {
//   // console.log(b[i]);

//   let currentB = b[i];

//   let right = currentB[1] - 1;
//   let left = currentB[0] - 1;
//   if (left == 0) {
//     result.push(prefixSumArr[right]);
//   } else {
//     let temp = prefixSumArr[right] - prefixSumArr[left - 1];
//     result.push(temp);
//   }
// }
// console.log("result", result);



function test(A, B){
          const lessThan = (arr, k) => {
            let count = 0
            for (let i = 0; i < arr.length; i++) {

                if (arr[i] < k) count++;
            }
            console.log(count, k)
            return count
        }

        let l = Math.min(A[0], B[0])
        let r = Math.max(A[A.length - 1], B[B.length - 1])
        let result = -1
        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            console.log('m', m)
            let arr1 = lessThan(A, m)
                        let arr2 = lessThan(B, m)
            if ((arr1 + arr2) >= ((A.length + B.length + 1) / 2)) {
                result = m;
                r = m - 1
            } else l = m + 1
        }
        console.log('result', result)
        return result
}


console.log(test([1, 4, 5], [2, 3]))