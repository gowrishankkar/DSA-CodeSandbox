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
// .then(console.log)
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
function fetchByPromise(fileName) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(`content : ${fileName}`);
        }, 100 * Math.random());
    });
}

function twoSeries(file1, file2, ansArray) {
    //write your code here =========================================
    fetchByPromise(file1).then((res) => {
        ansArray.push(res)
        fetchByPromise(file2).then((res) => {
            ansArray.push(res)
            ansArray.push("All files have been read");
            console.log('ansArray 111', ansArray)
        });
    });

    //ansArray.push(data2)
   
 
}


let ansArray = [];
twoSeries('FILE 1', 'FILE 2', ansArray);