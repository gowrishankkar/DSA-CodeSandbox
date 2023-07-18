console.log("asdss");

/**
 *
 * Environment : Browser
 * Web API
 * console -> is not part of JS
 * window -> is not part of JS
 * document -> is not part of JS
 * eventListners -> is not part of JS
 *
 * Environment : NodeJS
 * fs : nodejs
 * http : nodejs
 * chile_process : nodejs
 *
 *
 *
 */

console.log(1);
setTimeout(function () {
  console.log(3);
});
console.log(4);
setTimeout(function () {
  console.log(2);
});
Promise.resolve().then(function () {
  console.log(5);
});
console.log(6);

setTimeout(function () {
  console.log(2);
});

let p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(new Error("some value"));
  }, 2000);

  resolve("some error");

  setTimeout(function () {
    reject(new Error("some value"));
  }, 2000);

  resolve("some error");

  setTimeout(function () {
    reject(new Error("some value"));
  }, 2000);
});

p.then(null, function (err) {
  console.log(1);
  console.log(err);
});

p.catch(function (err) {
  console.log(2);
  console.log(err);
});

p.finally(function () {
  console.log(1);
});

p.finally(function () {
  console.log(2);
}).then(function (val) {
  console.log(val);
});

p.then(
  function (val) {
    console.log(val);
  },
  function (err) {
    console.log(err);
  }
);

console.log("Before");

const cb2 = () => {
  console.log("set timeout 1");
  while (1) {}
};
const cb1 = () => console.log("hello");
setTimeout(cb2, 1000);

setTimeout(cb1, 2000);

console.log("After");
