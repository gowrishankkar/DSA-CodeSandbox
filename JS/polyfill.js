let cap = {
  fname: "Steve",
  team: "cap",
  fn: function (m1, m2) {
    console.log("Hi from ", this.fname, this.team);
    console.log("Team members ", m1, m2);
  },
};

let ironMan = {
  fname: "Tony",
  team: "iron man",
};
//   cap.fn();

//   cap.fn.call(ironMan, "thor", "hulk");
//   cap.fn.apply(ironMan, ["thor", "hulk"]);

//   const boundFn = cap.fn.bind(ironMan)
//   boundFn('nat', 'vision')

//   const boundFn2 = cap.fn.bind(ironMan)
//   let team = ['hawkeye', 'starlord']
//   boundFn2(...team)

// Polyfill of call method
Function.prototype.myCall = function (requiredObject, ...params) {
  //   console.log("mycall fuction", requiredObject, this, params, { ...params });
  let requiredFunction = this;
  requiredObject["requiredFunction"] = requiredFunction;
  requiredObject.requiredFunction(...params);
  delete requiredObject.requiredFunction;
};

// Polyfill of apply method
Function.prototype.myApply = function (requiredObject, params) {
  let requiredFunction = this;
  requiredObject["requiredFunction"] = requiredFunction;
  requiredObject.requiredFunction(...params);
  delete requiredObject.requiredFunction;
};

// Polyfill of bind method
Function.prototype.customBind = function (requiredObject) {
  let requiredFunction = this;
  return function (...args) {
    requiredFunction.myCall(requiredObject, ...args);
  };
};

cap.fn.myCall(ironMan, "thor", "hulk");
cap.fn.myApply(ironMan, ["thor", "hulk"]);

const boundFn3 = cap.fn.customBind(ironMan);
boundFn3();

let a = [1, 2, 3, 4];
a[100] = 100;
console.log(a.length);

function superClone(obj) {
  let newObj = {};

  for (let key in obj) {
    let isKeyObj = typeof obj[key];
    if (isKeyObj === " object") {
      newObj[key] = superClone(obj[key]);
    } else newObj[key] = obj[key];
  }

  return newObj;
}

let d = {
  isbn: "123-456-222",
  author: {
    lastname: "Doe",
    firstname: "Jane",
    editor: {
      lastname: "Smith",
      firstname: "Jane",
    },
  },
  editor: {
    lastname: "Stestmith",
    firstname: "Jane",
  },
  title: "The Ultimate Database Study Guide",
  category: ["Non-Fiction", "Technology"],
};

console.log("clone", superClone(d));
