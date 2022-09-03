// Problem Description
// Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.
// A=[2, 1, 6, 4]

function testFunction(A) {
    let nums = A;
    let prevEven = 0;
    let prevOdd = 0;
    let nextEven = 0;
    let nextOdd = 0;
  
    for (let index = 0; index < nums.length; index++) {
      if (index % 2 === 0) {
        nextEven += nums[index];
      } else {
        nextOdd += nums[index];
      }
    }
    // console.log("nextEven", nextEven);
    // console.log("nextOdd", nextOdd);
  
    let indexToRemove = 0;
  
    for (let index = 0; index < nums.length; index++) {
      if (index % 2 === 0) {
        nextEven -= nums[index];
      } else {
        nextOdd -= nums[index];
      }
      console.log("nextEven", nextEven);
      console.log("nextOdd", nextOdd);
      if (prevEven + nextOdd === prevOdd + nextEven) {
        indexToRemove++;
      }
  
      if (index % 2 === 0) {
        prevEven += nums[index];
      } else {
        prevOdd += nums[index];
      }
    }
  
    return indexToRemove;
  }
  
  console.log(testFunction([2, 1, 6, 4]));
  