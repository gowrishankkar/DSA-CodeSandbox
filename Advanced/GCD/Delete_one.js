function test(A) {
    let n = A.length;
    let prefixArr = [A[0]];
    let suffixArr = [];
    suffixArr[n-1] = A[n - 1];
  
    console.log('suffixArr', suffixArr)
    // for (let i = 1; i < n; i++) {
    //   prefixArr[i] = gcd(prefixArr[i-1], A[i - 1]);
    // }
    console.log('after', suffixArr)
    for (let i = n - 2; i >=0 ; i--) {
  
      suffixArr[i] = gcd(suffixArr[i+1], A[i -1] || 0);
    }
  
    console.log('after 2', suffixArr)
    // A.forEach((ele, idx) => {
    //   prefixArr.push(gcd(ele, A[idx - 1]));
    // });
    // A.reverse().forEach((ele, idx) => {
    //   suffixArr.push(gcd(ele, A[idx + 1]));
    // });
    console.log("prefixArr", prefixArr);
    console.log("suffixArr", suffixArr);
    let result = [];
  
    // for (let i = 0; i < n; i++) {
    //   console.log(i)
    //   result.push(gcd(prefixArr[i - 1] || 0, suffixArr[i + 1] || 0));
    // }
  
    console.log("result", Math.max(...result), result);
  }
  const gcd = (a, b) => {
    if (b == 0) return a;
  
    return gcd(b, a % b);
  };
  
  test(  [ 21, 7, 3, 42, 63 ]);
  