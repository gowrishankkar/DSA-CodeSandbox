console.log("setInterval");

function mysetInterval(fn, delay) {
  let obj = { flag: true };
  function my() {
    if (obj.flag) {
      fn();
      setTimeout(my, delay);
    }
  }
  setTimeout(my, delay);
  return obj;
}

function cb() {
  console.log("Callback function");
}

function clearMyTimeout(obj) {
  obj.flag = false;
}

let obj = mysetInterval(cb, 1000)


function clearCB(){
    console.log("cancelled the CB")
    clearMyTimeout(obj)
}

setTimeout(clearCB, 3000)



/////////////////////////////////////////
// The new property will not update
// let notExtendableObj = Object.preventExtensions(config)
// config.change = "rnadom data"
// console.log(notExtendableObj)
// Here the changes on config will not get updated on   notExtendableObj
const object1 = {};

Object.preventExtensions(object1);

try {
  Object.defineProperty(object1, 'property1', {
    value: 42
  });
} catch (e) {
  console.log(e);
  // Expected output: TypeError: Cannot def ine property property1, object is not extensible
}



//  Object.seal will only allow for update operation and not delete/adding of properties
