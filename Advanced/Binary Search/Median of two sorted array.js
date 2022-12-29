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
  