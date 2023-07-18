const fs = require("fs");

/*

*/
const aa = async () => {
  console.log("before");
  const promise = fs.promises.readFile("./JS/f1.txt");
  //   console.log("promise", await promise);
  promise.then((tes) => console.log("tes", tes));
  console.log("after");
};
aa();

// promise
//   .then((res) => {
//     console.log("F1 ", res);
//     return fs.promises.readFile("./JS/f2.txt");
//   })
//   .then((res) => {
//     console.log("F2 ", res);
//     return fs.promises.readFile("./JS/f3.txt");
//   })
//   .then((res) => {
//     console.log("F3 ", res);
//   })
//   .catch((err) => console.log("err", err));

// function promiseReadFile(filePath) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, function (err, data) {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

// const sym1 = Symbol("one");
// const sym2 = Symbol("one");

// const sym3 = Symbol.for("two");
// const sym4 = Symbol.for("two");

// console.log(sym1 === sym2, sym3 === sym4);

// async function getData() {
//   return await Promise.resolve("I made it!");
// }

// const data = getData();
// console.log(data);
// data.then((res) => console.log("res", res));

// function resolveAfterNSeconds(n, x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(x);
//         }, n);
//     });
// }

// (function () {
//     let a = resolveAfterNSeconds(1000, 1)
//     a.then(async function (x) {
//         let y = await resolveAfterNSeconds(2000, 2)
//         let z = await resolveAfterNSeconds(1000, 3)
//         let p = resolveAfterNSeconds(2000, 4)
//         let q = resolveAfterNSeconds(1000, 5);
//         console.log(x + y + z + await p + await q);
//     })
// })()

// const createPromise = () => Promise.resolve(1)

// function func1() {
//   createPromise().then(console.log)
//   console.log(2)
// }

// async function func2() {
//   await createPromise()
//   console.log(3)
// }

// console.log(4)
// func1()
// func2()


for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
        console.log('testtestet', i); // What is logged?
    }, 1000);
}