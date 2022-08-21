function test(A, B) {
  // var lengthNums = A.length;
  // let result = [];
  // let finalresult = [];
  // console.log("result", result);

  // for (var i = 0; i < lengthNums - 1; i++) {
  //   for (var j = i; j < lengthNums; j++) {
  //     if (A[i] + A[j] === B) result.push([i + 1, j + 1]);
  //   }
  // }
  // console.log("result", result);

  // let minimumIndex2 = [];
  // let minIndex2Value = result[0][1];
  // for (let k = 0; k < result.length; k++) {
  //   // console.log('result[k][1]', result[k][1])
  //   if (result[k][1] < minIndex2Value) {
  //     minIndex2Value = result[k][1];
  //     minimumIndex2.push([result[k][0], result[k][1]]);
  //   }
  // }
  // finalresult = minimumIndex2;

  // if (minimumIndex2.length > 1) {
  //   let minimumIndex1 = [];
  //   let minIndex1Value = minimumIndex2[0][1];
  //   for (let k = 0; k < result.length; k++) {
  //     // console.log('result[k][1]', result[k][1])
  //     if (result[k][0] < minIndex1Value) {
  //       minIndex1Value = result[k][0];
  //       minimumIndex1.push([result[k][0], result[k][1]]);
  //     }
  //   }
  //   finalresult = minimumIndex1;
  // }

  // console.log("minIndexValue", finalresult);

  //   let map = {};
  //   let nums = A;
  //   let target = B;
  //   let result = [];
  //   for (let i = 0; i < nums.length; i++) {
  //     if (target - nums[i] in map) {
  //       result.push([map[target - nums[i]], i]);
  //     } else {
  //       map[nums[i]] = i;
  //     }
  //   }
  //   console.log("result", result);

  let myMap = new Map();
  let nums = A;
  let target = B;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    // console.log("complement", complement);
    if (myMap.has(complement)) {
      result.push([myMap.get(complement) + 1, i + 1]);
    } else {
      if (myMap.has(nums[i])) {
        continue;
      } else myMap.set(nums[i], i);
    }
  }
  console.log(myMap, "result", result);
}

// let myMap = new Map();
// myMap.set(0, "test")
// myMap.set(1, "tes2")
// myMap.set(2, "tes3")
// myMap.set(3, "tes4")

// for(let [key, values] of myMap){
//   console.log(key, 'ke is', values)
// }

// myMap.delete(2)

// myMap.forEach((value, key)=>{
//   console.log('key', key, value)
// })

// console.log(myMap)

test(
  [
    4,
    7,
    -4,
    2,
    2,
    2,
    3,
    -5,
    -3,
    9,
    -4,
    9,
    -7,
    7,
    -1,
    9,
    9,
    4,
    1,
    -4,
    -2,
    3,
    -3,
    -5,
    4,
    -7,
    7,
    9,
    -4,
    4,
    -8
  ],
  -3
);
