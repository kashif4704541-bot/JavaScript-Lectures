// JavaScript Variables

// variable is a container used to store data in it

// let VS const VS var 

let age = 15;
age = 19;                // let can be updated or re declared

console.log(age);

const Pi = 3.142;
// Pi = 3.1425;           # const can neither be updated or re declared
console.log(Pi)


// JavaScript DataTypes

// 1. Primitive datatypes:

let str = "Hello world";
console.log(str, typeof str )

const Num = 42
console.log(Num, typeof Num )

let float = 3.142
console.log(float, typeof float)

let bigInt = 12345678901234567890n
console.log(bigInt, typeof bigInt )

let bppLean = true
console.log(bppLean, typeof bppLean ) 

let x;
console.log(x, typeof x )

let y = null
console.log(y, typeof y)

let id = Symbol("id")
console.log(id, typeof id)

// 2. Non Primitive Data Types 

let person = {
    name: "Ali",
    age: 21,
    city: "New York"
}
console.log(person, typeof person);

let arr = [1, 2,3, 4, 5]
console.log(arr, typeof arr )




