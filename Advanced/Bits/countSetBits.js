function test(A) {
    let n = A + 1;
    let mod = 1000000007;
    let setSize = 2;
    let ans = 0;
    while (setSize / 2 < n) {
      ans += Math.floor(n / setSize) * Math.floor(setSize / 2);
      ans %= mod;
  
      ans +=
        n % setSize <= Math.floor(setSize / 2)
          ? 0
          : (n % setSize) - Math.floor(setSize / 2);
  
      ans %= mod;
      console.log("ans", ans);
      setSize *= 2;
    }
    return ans;
  }
  
  console.log("test", test(19));
  