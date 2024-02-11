const nums = [1, 2, 3, 4];

// Map
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const mapThree = nums.myMap((num, i, arr) => {
  return num * 4;
});
// console.log(mapThree)

// Filter
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};
const twoFilter = nums.myFilter((num, i, arr) => {
  return num > 2;
});
// console.log(mapFilter)

// Reduce
Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue || this[0];
  for (let i = 0; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};
const newReduce = nums.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
// console.log(newReduce);

// curry

function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;

const totalSum = curry(sum);

// console.log(totalSum(1)(2)(3))

//Objects
const user = {
  name: "Gowri Shankar",
  age: "28",
};


const strObj = JSON.stringify(user);

localStorage.setItem('test', strObj)

// console.log()