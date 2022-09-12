// Problem Description
// Given an array of size N, find the subarray of size K with the least average.

// Sol 1
function test(A, B) {
    let arr = A;
    let n = arr.length;
    let minIndex = 0;
  
    // console.log('B', B)
    let currentSum = 0;
    for (let j = 0; j < B; j++) {
        console.log('arr[j]', arr[j])
      currentSum += arr[j];
    }
  
    let min = currentSum;
    console.log(min)
    for (let i = 1; i <= n - B; i++) {
      currentSum = currentSum + arr[i + B - 1] - arr[i - 1];
      console.log('currentSum', currentSum)
      if (currentSum < min) {
        min = currentSum;
        minIndex = i;
      }
    }
  
    return minIndex;
  }
  
  test([3, 7, 90, 20, 10, 50, 40], 3);


// Sol 2
  function test(A, B) {
    let arr = A;
    let n = arr.length;
    let minIndex = 0;
  
    // console.log('B', B)
    let currentSum = 0;
    for (let j = 0; j < B; j++) {
      console.log("arr[j]", arr[j]);
      currentSum += arr[j];
    }
  
    let minAvge = currentSum / B;
  
    console.log("minAvge", minAvge);
    for (let i = 1; i <= n - B; i++) {
      currentSum = currentSum + arr[i + B - 1] - arr[i - 1];
      if (currentSum / B < minAvge) {
        minAvge = currentSum / B;
        minIndex = i;
      }
  
      console.log("currentSum di", currentSum / B, i);
    }
  
    console.log("minIndex", minIndex);
    return minIndex;
  }
  
  // test([3, 7, 90, 20, 10, 50, 40], 3);
  test([15, 7, 11, 7, 9, 8, 18, 1, 16, 18, 6, 1, 1, 4, 18], 6);