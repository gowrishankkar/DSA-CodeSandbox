function test(A, B) {
  // const sumSet = new Set();
  // let sum = 0;
  // for (let s = 0; s < A.length; s++) {
  //   // sum += A[i];
  //   for (let e = s; e < A.length; e++) {
  //     // if (sum === B) {
  //     let sum = 0;
  //     for (let k = s; k <= e; k++) {
  //       let sum = A[k];
  //       if (sum === B) console.log("sum", sum,s, e);
  //     }
  //     //   sumSet.add(i);
  //     // }
  //   }

  //   // sumSet.add(sum);
  // }
  // console.log("sumSet", sumSet);
  let result = [];
  for (let s = 0; s < A.length; s++) {
    let sum = 0;
    for (let e = s; e < A.length; e++) {
      sum += A[e];

      // console.log('sum', sum)

      if (sum === B) {
        result.push([s, e]);
        // console.log(" sum ", sum, A[s], A[e]);
      }
    }
  }
  let final = [];
  if (result[0]) {
    let one = result[0];

    for (let s = one[0]; s <= one[1]; s++) {
      // console.log('s', A[s])
      final.push(A[s]);
    }
  }

  console.log("result", final[0] ? final : [-1]);
  return 0;
}
test([5, 10, 20, 100, 105], 110);
// test([1, 2, 3, 4, 5], 5);
// test(
//   [
//     23,
//     50,
//     44,
//     6,
//     39,
//     15,
//     44,
//     27,
//     47,
//     29,
//     30,
//     44,
//     28,
//     42,
//     7,
//     32,
//     16,
//     40,
//     8,
//     7,
//     5,
//     48,
//     48,
//     16,
//     9,
//     5,
//     50,
//     16,
//     18,
//     9,
//     21,
//     26,
//     48,
//     37,
//     27,
//     7,
//     5,
//     29,
//     24,
//     28,
//     10,
//     44,
//     21,
//     1,
//     48,
//     15,
//     31,
//     41,
//     42,
//     23,
//     4,
//     32,
//     40,
//     40,
//     27,
//     20,
//     29,
//     42,
//     25,
//     18,
//     37,
//     43,
//     13,
//     30,
//     42,
//     24,
//     17,
//     42,
//     14,
//     42,
//     43,
//     36,
//     31,
//     29,
//     24,
//     24,
//     8,
//     3,
//     12,
//     34,
//     14,
//     6
//   ],
//   62
// );
