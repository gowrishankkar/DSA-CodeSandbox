// Create object in js

let obj = {
  name: "Gowri"
};

let arr = []
console.log(obj.__proto__);



// console.log(arr.__proto__);

// console.log(arr.__proto__.__proto__);

// console.log(arr.__proto__.__proto__.__proto__);


// MCQ1
function Rabbit(name){
    this.name = name;
}

Rabbit.prototype.sayHi = function() {
    console.log(this.name)
}

let rabbit = new Rabbit('Rabbit')
rabbit.sayHi()
Rabbit.prototype.sayHi()
Object.getPrototypeOf(rabbit).sayHi()
rabbit.__proto__.sayHi()


console.log(rabbit.__proto__);
console.log(Object.getPrototypeOf(rabbit));



// MCQ2
function A(){}
function B(){}

A.prototype = B.prototype = {};

let a = new A();

console.log(a instanceof B)

// MCQ3
class Animal {
    constructor(name){
        this.name = name
    }
}

class Rabit extends Animal{
    constructor(name){
        super(name)
        this.created = Date.now()
    }
}

let rabit = new Rabit('test rabbit')
console.log(rabit.name)