function magic(A, B, C) {
  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  const mod = 1000000007;
  let low = Math.min(C, B);
  let high = A * low;
  let hcf = Math.floor((B * C) / gcd(B, C));
  let result = -1;
  while (low < high) {
    console.log(low, "high", high);
    let mid = Math.floor((low + high) / 2);
    let ans = Math.floor(mid / B) + Math.floor(mid / C) - Math.floor(mid / hcf);
    console.log("mid", mid);
    console.log("ans", ans);
    if (ans < A) {
      low = mid + 1;
      console.log("result change", result);
    } else {
      high = mid;
      result = mid;
    }
  }
  return result;
}

// console.log(magic(19, 11, 13));
console.log(magic(20, 4, 4));
// console.log(magic(8, 2, 3));
