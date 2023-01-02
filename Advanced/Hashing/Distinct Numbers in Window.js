function test(A, B) {
    let myMap = new Map();
  
    for (let i = 0; i <= A.length - B; i++) {
      if (myMap.has(A[i])) myMap.set(A[i], myMap.get(A[i]) + 1);
      else myMap.set(A[i], 1);
    }
    let ans = [];
    for (let j = 1; j <= A.length - B; j++) {
      for (let i = j; i < j + B; i++) {
        //   console.log("test", i);
        console.log("myMap", myMap);
        let rem = A[i];
        console.log("rem", rem);
        if (myMap.get(rem) === 0) myMap.delete(rem);
        if (myMap.has(rem)) myMap.set(rem, myMap.get(rem) + 1);
        else myMap.set(rem, 1);
       
      }
      ans.push(myMap.size);
    }
    return ans;
  }
  
  console.log(test([1, 2, 1, 3, 4, 3], 3));
  