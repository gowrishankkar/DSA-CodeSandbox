function test(A, B) {
  let myMap = new Map();

  for (let i = 0; i < B; i++) {
    if (myMap.has(A[i])) myMap.set(A[i], myMap.get(A[i]) + 1);
    else myMap.set(A[i], 1);
  }

  let rem = 0;
  let ins = B;
  let ans = [myMap.size];
  while (ins < A.length) {
    myMap.set(A[rem], myMap.get(A[rem]) - 1);
    if (myMap.get(A[rem]) === 0) myMap.delete(A[rem]);

    if (myMap.has(A[ins])) myMap.set(A[ins], myMap.get(A[ins]) + 1);
    else myMap.set(A[ins], 1);

    // ans = Math.max(ans, myMap.size);
    console.log("myMap", myMap);
    ans.push(myMap.size);
    ins++;
    rem++;
  }
  console.log("myMap", myMap);
  console.log("ans", ans);
}

test([1, 2, 1, 3, 4, 3], 3);
