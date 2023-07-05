// Polyfills of Call, Apply, Bind & Deep copy/ Shallow copy

// Default Parameters
function fn1(p1, p2, p3) {
  console.log("params", p1, p2, p3);
}
fn1("test1", "test2", "test3");
fn1("test1", "test2");


// Spread Operator
// Assignment operator modifies the same ref
let a = [1, 2, 3, 4, 5, 6];
let b = [...a];
b.pop();
b.push(8);
b[1] = 100;
console.log(a, b);

// Spread operator copies values only on the first level
// and the changes done on the nested level will reflect on the original array
let ab = [1, 2, [3, 4], 5, 6];
let bb = [...ab];
bb.pop();
bb.push(8);
bb[2][0] = 100;
console.log(ab, bb);
