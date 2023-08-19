// let arr = [{
//     name: "pavi",
//     age: 26,
//     address: "sulur"
// },
// {
//     name: "gowri",
//     age: 26,
//     address: "sulur"
// }
// ]

// const res = arr.find((e)=> {
//     if(e.name==="pavi"){
//         return e
//     }
// })
// console.log(res)

// let arr2= JSON.parse(arr)

// console.log(getresult())

// var getresult = function (){
//     console
// }
// function a(){}
// function b(){}
// a.prototype = b.prototype = {}

// let c = new a()

// console.log(c instanceof b)

// // for (var i = 0; i < 3; i++) {
// //     setTimeout(function log() {
// //         console.log(i); // What is logged?
// //     }, 1000);
// // }


// var fruits= ["Apple", "Mango", "Banana"];

// console.log(fruits instanceof Array);
// console.log(fruits instanceof Object);
// console.log(fruits instanceof Number);
// console.log(fruits instanceof String);
const promise1 = Promise.resolve(1)
const promise2 = Promise.resolve(2)
const promise3 = Promise.resolve(3)
const promise4 = Promise.reject(5)

const promiseAll = async () => {
  const group1 = await Promise.all([promise1, promise2])
  const group2 = await Promise.all([promise3, promise4])
  return [group1, group2]
}

promiseAll().then(console.log).catch(console.log)