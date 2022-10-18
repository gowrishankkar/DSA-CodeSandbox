function test(A) {
    let freq = new Map();
    let odd = 0;
    for (let i = 0; i < A.length; i++)
      if (!freq.has(A[i])) {
        freq.set(A[i], 1);
      } else {
        freq.set(A[i], freq.get(A[i]) + 1);
      }
  
    console.log("freq", freq);
    for (let [key, value] of freq) {
      console.log('value', value)
      if (value % 2 == 1) odd++;
    }
    return odd > 1 ? 0 : 1;
  }
  
  console.log(test("uucgncntt"));
  