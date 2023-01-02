function test(A, B) {
  let map = new Map();

  for (let num of A) {
    map.has(num) ? map.set(map, map.get(num) + 1) : map.set(num, 1);
  }

  let ans = [];
  let j = 0;
  for (let num of B) {
    // console.log('num', num)
    console.log("map.has(num)", map.has(num));
    if (map.has(num)) {
      while (map.get(num) > 0) {
        // ans.push(num);
        ans[j] = num;
        j++;
        map.set(num, map.get(num) - 1);
      }
      map.delete(num);
    }
  }

  //   let temp = [];
  //   for (let [key, value] of map.entries()) {
  //     while (map.get(key)) {
  //       temp.push(key);
  //       //   map[key]--;
  //       map.set(key, map.get(key) - 1);
  //     }
  //   }
  //   let A = [];
  //   for (let ele of temp) {
  //     A[j] = +ele;
  //     j++;
  //   }
  console.log("temp", temp);

  for (let [key, value] of map.entries()) {
    console.log("key, value", key, value, map.get(key));

    while (map.get(key) > 0) {
      //   ans.push(key);
      ans[j] = key;
      j++;
      map.set(key, map.get(key) - 1);
    }
    map.delete(key);
  }

  //   console.log("ans", ans, map);
  return ans;
}

// console.log(test([12, 7], [7, 1, 6, 17, 2, 19, 10]));

console.log("test", test([15, 5, 10, 6, 14], [8, 16, 6, 2, 13, 1, 12, 3, 14]));
//6 14 5 10 15
