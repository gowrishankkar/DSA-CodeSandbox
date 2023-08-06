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

var t = 10;
const tested = () => {
  console.log("tested", t);
};

const test = () => {
  var t = 20;
  tested();
  console.log("test", t);
};

test();

function createCounter(init, delta) {
  function count() {
    init = init + delta;
    return init;
  }
  return count;
}

let c1 = createCounter(10, 5);
let c2 = createCounter(5, 2);

console.log(c1());
console.log(c2());
console.log(c1());
console.log(c2());

function counter(arg) {
  let count = 0;
  if (arg == 0) {
    count++;
    return count;
  } else {
    return function inner(arg) {
      count++;
      if (arg == 0) {
        return count;
      } else return inner;
    };
  }
}

console.log(counter(0));
console.log(counter()()()()()(0));
console.log(counter()()(0));

function cal(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

function mem(fn) {
  let c = {};

  return function (n) {
    let present = Object.keys(c).includes(n);
    if (present) return c[n];
    else {
      const result = fn(n);
      c[n] = result;
      return result;
    }
  };
}



let eff = mem(cal);
// console.log(eff)

console.time();
eff(121320)
console.timeEnd()

console.time();
eff(121320)
console.timeEnd()


// function applyPolyfill(fn, context, args) {
//   // Check if the fn is a function
//   if (typeof fn !== "function") {
//     throw new TypeError("fn must be a function");
//   }
//   // Set the context if it’s null or undefined
//   if (context == null) {
//     context = window;
//   }
//   //   Create a unique property on the context object to store the function
//   const uniqueProp = Symbol("applyPolyfill");
//   context[uniqueProp] = fn;
//   // Call the function with the given context and arguments

//   const result = context[uniqueProp](...args);
//   //   console.log('result', result)
//   // Delete the unique property from the context object
//   delete context[uniqueProp];
//   // Return the result
// //   console.log("result", result, context);
//   return result;
// //   context.fnRef = this;
// //   var result = obj.fnRef(...args);
// //   delete obj.fnRef;
// //   return result;
// }

// function greet(country) {
//   return "Hello, " + this.name + " from " + country;
// }

// const person = {
//   name: "John",
// };

// const result = applyPolyfill(greet, person, ["India"]);
// console.log(result);
