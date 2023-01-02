
function test(A) {
    //   let hM = new Map();
    //   let sum = 0;
    //   let max_len = 0;
    //   let start = 0;
    //   let end = A.length - 1;
    //   for (let i = 0; i < A.length; i++) {
    //     sum = A[i];
    //     if (hM.has(sum)) {
    //       if (i - mymap.get(sum) > maxLen) {
    //         start = mymap.get(sum);
    //         end = i;
    //       }
    //       max_len = Math.max(max_len, i - hM.get(sum));
    //     } else hM.set(sum, i);
    //   }
  
    //   let ans = new Array(end - start);
    //   let j = 0;
    //   for (let i = start + 1; i <= end; i++)
    //       ans[j++] = A[i];
    //   console.log("ans", ans);
    //   return ans;
  
    let hM = new Map();
    let sum = 0;
    let max_len = 0;
    let start = -1;
    let end = -1;
    hM.set(0, -1);
    for (let i = 0; i < A.length; i++) {
      sum += A[i];
      if (hM.has(sum)) {
        if (i - mymap.get(sum) > maxLen) {
          start = mymap.get(sum);
          end = i;
        }
        max_len = Math.max(max_len, i - hM.get(sum));
      } else hM.set(sum, i);
    }
  
    // let ans = []
  
    // for (let i = start + 1; i <= end; i++)
    //     ans.push(A[i]);
  
    let ans = new Array(end - start);
    let j = 0;
    for (let i = start + 1; i <= end; i++) ans[j++] = A[i];
  
    return ans;
  }
  
  // test([1,2,-2,4,-4]);
  console.log(test([1, 2, -3, 3]));
  