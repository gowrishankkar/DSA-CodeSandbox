const arr = [1, 2, 3, 4, 5, 1, 1, 1, 4, 5, 8, 5, 5, 5];

const mySet = new Set(arr);

mySet.add("99");
mySet.add({ test: "test" });
mySet.add([5, 4, 6]);

console.log(arr);
console.log(mySet.size );

// const uniq = [...mySet]
// console.log(uniq)