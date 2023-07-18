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

let obj = mysetInterval(cb, 1000);

function clearCB() {
  console.log("cancelled the CB");
  clearMyTimeout(obj);
}

setTimeout(clearCB, 3000);

/////////////////////////////////////////
// The new property will not update
// let notExtendableObj = Object.preventExtensions(config)
// config.change = "rnadom data"
// console.log(notExtendableObj)
// Here the changes on config will not get updated on   notExtendableObj
const objectP = {};

Object.preventExtensions(objectP);

try {
  Object.defineProperty(objectP, "property1", {
    value: 42,
  });
} catch (e) {
  console.log(e);
  // Expected output: TypeError: Cannot def ine property property1, object is not extensible
}

//  Object.seal will only allow for update operation and not delete/adding of properties
// The Object.seal() static method seals an object.
// Sealing an object prevents extensions and makes existing properties non-configurable.
//  A sealed object has a fixed set of properties: new properties cannot be added,
//   existing properties cannot be removed, their enumerability and configurability
//    cannot be changed, and its prototype cannot be re-assigned.
//    Values of existing properties can still be changed as long as they are writable.
//    seal() returns the same object that was passed in.

const object1 = {
  property1: 42,
};

Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// Expected output: 33

delete object1.property1; // Cannot delete when sealed
console.log(object1.property1);
// Expected output: 33

// The Object.freeze() static method freezes an object.
// Freezing an object prevents extensions and makes existing properties
//  non-writable and non-configurable. A frozen object can no longer be
//  changed: new properties cannot be added, existing properties cannot be removed,
//  their enumerability, configurability, writability, or value cannot be changed,
//  and the object's prototype cannot be re-assigned.
//  freeze() returns the same object that was passed in.

const obj2 = {
  prop: 42,
};

Object.freeze(obj2);

obj2.prop = 33;
// Throws an error in strict mode

console.log(obj2.prop);
// Expected output: 42



