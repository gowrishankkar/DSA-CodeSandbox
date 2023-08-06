// function resolveAfterNSeconds(n, x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(x);
//         }, n);
//     });
// }

// (function () {
//     let a = resolveAfterNSeconds(10, 1)
//     a.then(async function (x) {
//         let y = await resolveAfterNSeconds(2000, 2)
//         let z = await resolveAfterNSeconds(1000, 3)
//         let p = resolveAfterNSeconds(10000, 4)
//         let q = resolveAfterNSeconds(6000, 5);
//         console.log(x + y + z + await p + await q);
//     })
// })()

// -----------------------------------------------------------
// let animal = {
//   jumps: null,
// };

// let rabbit = {
//   __proto__: animal,
//   jumps: true,
// };

// console.log(rabbit.jumps); // 2? (1)
// delete rabbit.jumps;
// console.log(rabbit.jumps); // 2? (2)
// delete animal.jumps;

// console.log(rabbit.jumps); // 2? (3)



// -----------------------------------------------------------
// function f(value) {
//   let count = 1;

//   function innerFn(value) {
//     if (value) {
//       return count = value * count ;
//     } else {

//       return innerFn;
//     }
//   }

//   return innerFn;
// }

// function f(value) {
//   let count = 1;

//   if (value) {
//     count = value * count;
//     return f;
//   }
// }

// function f(y, x) {
//     console.log('arguments', arguments)
//   if (arguments.length == 1) {
//     return function (x) {
//       return y * x;
//     };
//   } else {
//     return x * y;
//   }
// }

// console.log(f(3)(4));



// -----------------------------------------------------------
// function applyPolyfill(fn, context, args) {
//   // Write your solution here ========================

//   Function.prototype.app = (requiredObject, params) => {

//     // let requiredFunction = this;
//     requiredObject.requiredFunction = this;
//     var result = requiredObject.requiredFunction(...params);
//     console.log('requiredObject, params', requiredObject, params)
//     delete requiredObject.requiredFunction;
//     return result
//   };
//   return fn.app(context, args);
// }



// -----------------------------------------------------------
function applyPolyfill(fn, context, args) {
    // Check if the fn is a function
    if (typeof fn !== "function") {
      throw new TypeError("fn must be a function");
    }
    // Set the context if it’s null or undefined
    if (context == null) {
      context = window;
    }
    //   Create a unique property on the context object to store the function
    const uniqueProp = Symbol("applyPolyfill");
    context[uniqueProp] = fn;
    // Call the function with the given context and arguments
  
    const result = context[uniqueProp](...args);
    //   console.log('result', result)
    // Delete the unique property from the context object
    delete context[uniqueProp];
    // Return the result
  //   console.log("result", result, context);
    return result;
  //   context.fnRef = this;
  //   var result = obj.fnRef(...args);
  //   delete obj.fnRef;
  //   return result;
  }
  
  function greet(country) {
    return "Hello, " + this.name + " from " + country;
  }
  
  const person = {
    name: "John",
  };
  
  const result = applyPolyfill(greet, person, ["India"]);
  console.log(result);
  