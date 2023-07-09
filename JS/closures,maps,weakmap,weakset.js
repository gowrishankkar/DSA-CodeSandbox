let arr = [1, 2, 3, 4, 5, 53, 6, 61, 7, 71, 83, 65, 24, 75, 12];

function sum(acc, ele) {
  return acc + ele;
}
const result = arr.reduce(sum);
console.log("result", result);

function prod(acc, ele) {
  return acc * ele;
}
const prodcutArr = arr.reduce(prod);
// console.log("prodcutArr", prodcutArr % 7);

function sumArr(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log("sumArr", sumArr(arr));

function reducer(arr, cb) {
  let acc = arr[0];

  for (let i = 1; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}

console.log("sumArr", reducer(arr, sum));

Array.prototype.myReducer = function (cb, def) {
  let acc = def ? def : this[0];
  let s = def ? 0 : 1;
  //   console.log("this", this);
  for (let i = s; i < this.length; i++) {
    // console.log("def", def);
    acc = cb(acc, this[i]);
  }
  return acc;
};

// Array.prototype.myReducer = (cb, initial) => {
//   let values = this;

//   values.forEach((item) => {
//     initial = initial !== undefined ? cb(initial, item) : item;
//   });

//   return initial;
// };

Array.prototype.myReduce = function (fn, initial) {
  let values = this;

  values.forEach((item) => {
    initial = initial !== undefined ? fn(initial, item) : item;
  });

  return initial;
};

var values = [2, 5, 5];
console.log(arr.reduce((a, b) => a + b)); // 50
console.log(arr.myReduce((a, b) => a + b)); // 50

console.log("sumArr", arr.myReducer(sum));
