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

//   const promise1 = Promise.reject('some error')
//   const promise2 = Promise.reject('some error')

// const { forEach } = require("lodash");

//   promise1.catch(function (err) {
//     console.log('1 ', err)
//     return 100
//   }).then(function (err){
//     console.log('2', err)
//   })

//   promise2.then(null, function (err) {
//     console.log('3 ', err)
//     return 200
//   }).then(function (err){
//     console.log('4', err)
//   })

//   let promise3 = Promise.resolve(10);

//   promise1.then(function(data){

//   })

// let val = 0;

// class A {
//   set foo(_val) {
//     val = _val;
//   }
//   get foo() {
//     return val;
//   }
// }

// class B extends A {}

// class C extends A {
//   get foo() {
//     return val;
//   }
// }

// const b = new B();
// console.log(b.foo);
// b.foo = 1;

// console.log(b.foo);

// const c = new C();
// console.log(c.foo);
// c.foo = 2;

// console.log(c.foo);
// console.log(b.foo);

// Q1 ----------------------------------------------------
// class A {
//   a = "a";
// }

// A.prototype.c = "c";

// class B extends A {
//   b = "b";
// }

// const a = new A();
// const b = new B();

// console.log(a.a);
// console.log(a.b);
// console.log(a.c);
// console.log(b.a);
// console.log(b.b);
// console.log(b.c);

// Q2 ----------------------------------------------------
// function twoSeries(file1, file2, ansArray) {
//   //write your code here =========================================

//   let promise1 = Promise.resolve(() => {
//     fetchByCb(file1, (data) => {
//       ansArray.push(data);
//     });
//   });
//   promise1.then((test) => {
//     fetchByCb(file2, (data) => {
//       ansArray.push(data);
//     });
//   });

//   ansArray.push("All files have been read");
// }

// function twoSeries(file1, file2, ansArray) {
//   //write your code here
//   function cb1(content) {
//     ansArray.push(content);
//     // start next task
//     fetchByCb(file2, cb2);
//   }
//   function cb2(content) {
//     ansArray.push(content);
//     ansArray.push("All files have been read");
//   }
//   fetchByCb(file1, cb1);
// }

// Ex 1 -----------------------------------------------------------
// Promise.resolve(1)
//   .then(() => 2)
//   .then((data) => {
//     console.log("data", data);
//     return Promise.reject("error 1");
//   })
//   .then((value) => {
//     console.log("value", value);
//     return value * 3;
//   })
//   .then(console.log)
//   .catch((err) => {
//     console.log("err", err);
//   });

// Ex 2 -----------------------------------------------------------
// Promise.resolve(1)
//   // .finally((data) =>{
//   //     console.log('3', data)
//   //     return Promise.reject('error 1')
//   // }).catch((err) => {
//   //     console.log('err', err)
//   // })
//   .finally((data) => {
//     console.log("4", data);
//     // return Promise.reject(2);
//     // return Promise.resolve(2).then(console.log);
//   })

//   .catch((err) => {
//     console.log("err", err);
//   })
//   .then(console.log);

// Ex 3 -----------------------------------------------------------

// Promise.reject(1)
//   .catch((err) => {
//     console.log("err 1 ", err);
//     return Promise.reject('testoinjsoldkfj');
//   })
//   .finally((data) => {
//     console.log("4", data);
//     return Promise.resolve(2).then(console.log);
//   })
//   .then((data) => console.log("15", data))
//   .catch(console.log);

// Ex 4 -----------------------------------------------------------
//   let p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         reject(new Error("some value"));
//     }, 2000);

//     resolve("some error");

//     setTimeout(function () {
//         reject(new Error("some value"));
//     }, 2000);

//     resolve("some error");

//     setTimeout(function () {
//         reject(new Error("some value"));
//     }, 2000);
// });

// p.then(null, function (err) {
//     console.log(1);
//     console.log(err);
// });

// p.catch(function (err) {
//     console.log(2);
//     console.log(err);
// });

// p.finally(function () {
//     console.log(1);
// })

// p.finally(function () {
//     console.log(2);
// }).then(function (val) {
//     console.log(val);
// })

// p.then(
//     function (val) {
//         console.log(val);
//     },
//     function (err) {
//         console.log(err);
//     }
// );

// Ex 5 -----------------------------------------------------------
// Promise.resolve(1)
// .finally((data) => {
//   console.log(data)
//   return Promise.reject('error')
// })
// .catch((error) => {
//   console.log(error)
//   throw 'error2 asdasd'
// })
// .finally((data) => {
//   console.log(data)
//   return Promise.resolve(2).then(console.log)
// })
// .then((res) => console.log('22', res))
// .catch(console.log)

// Ex 6 -----------------------------------------------------------

// function fetchByPromise(fileName) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(`content : ${fileName}`);
//     }, 100 * Math.random());
//   });
// }

// async function twoSeries(file1, file2, ansArray) {
//   //write your code here =========================================
//   await fetchByPromise(file1).then((res) => ansArray.push(res));

//   await fetchByPromise(file2).then((res) => ansArray.push(res));

//   //ansArray.push(data2)
//   ansArray.push("All files have been read");

//   console.log("ansArray", ansArray);
// }
// let ansArray = [];
// twoSeries("FILE 1", "FILE 2", ansArray);

// Ex 7 -----------------------------------------------------------
// function fetchByPromise(fileName) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(`content : ${fileName}`);
//     }, 100 * Math.random());
//   });
// }

// async function nSeries(fileArray, ansArray) {
//   //write your code here =========================================

//   if (!fileArray.length) {
//     ansArray.push("All files have been read");
//     return;
//   }
//   await fetchByPromise(fileArray[0]).then((res) => {
//     ansArray.push(res);
//     fileArray.shift();
//     nSeries(fileArray, ansArray);
//   });
//   console.log("ansArray", ansArray);
// }

// // async function nSeries(fileArray, ansArray) {
// //   //write your code here =========================================

// //   await fetchByPromise(e).then((res) => ansArray.push(res));
// //   ansArray.push("All files have been read");
// //   console.log("ansArray", ansArray);
// // }

// let ansArray = [];
// let fileArray = ["FILE 1", "FILE 2"];
// nSeries(fileArray, ansArray);

// Ex 8 -----------------------------------------------------------
// function fetchByPromise(fileName) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(`content : ${fileName}`);
//     }, 100 * Math.random());
//   });
// }

// function twoSeries(file1, file2, ansArray) {
//   //write your code here =========================================
//   fetchByPromise(file1).then((res) => {
//     ansArray.push(res);
//     fetchByPromise(file2).then((res) => {
//       ansArray.push(res);
//       ansArray.push("All files have been read");
//       console.log("ansArray 111", ansArray);
//     });
//   });

//   //ansArray.push(data2)
// }

// let ansArray = [];
// twoSeries("FILE 1", "FILE 2", ansArray);


// Ex 9 -----------------------------------------------------------
// function aclean(arr) {
//   // Write Code here ==========

//   let obj = {};
//   for (let d of arr) {
//     let sorted = d.toLowerCase().split("").sort().join("");
//     if (obj.hasOwnProperty(sorted) != true) obj[sorted] = d;
//   }

//   return Object.values(obj);
// }
// console.log(
//   "aclean()",
//   aclean(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"])
// );


// Ex 10 -----------------------------------------------------------


// Promise all
// const fs = require('fs');

// const promise1 = fs.promises.readFile('./JS/f1.txt')
// const promise2 = fs.promises.readFile('./JS/f2.txt')

// const combinePro = Promise.all([promise1, promise2])

// combinePro.then((res) => console.log('res', res))

// Ex 11 -----------------------------------------------------------

// const promise1 = Promise.resolve(1)
// const promise2 = Promise.resolve(2)
// const promise3 = Promise.reject(3)
// const promise4 = Promise.resolve(4)

// const promiseAll = async () => {
//     console.log('1')
//     const group1 = await Promise.all([promise1, promise2])
//     console.log('2')
//     const group2 = Promise.all([promise3, promise4])
//     console.log('3')
//     return [group1, group2]
// }


// promiseAll().then(console.log).catch(console.log)

// Ex 12 -----------------------------------------------------------

