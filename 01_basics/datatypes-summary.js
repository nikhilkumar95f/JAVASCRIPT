// primitive

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

let name = "Nikhil"; // String
const score = 100; // Number
const scoreValue = 100.5; // Number


const isLoggedIn = false; // Boolean
const outsideTemp = null; // Null
let userEmail ; // Undefined


const id = Symbol("123"); // Symbol
const anotherId = Symbol('123'); // Symbol
const bigNumber = 3456789012345678901234567890n; // BigInt

console.log(id === anotherId); // false


// reference (non-primitive)

// 3 types: Object, Array, Function

const heros = ["shaktiman", "naagraj", "doga"]; // Array
let myObj = {
    name: "Nikhil",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof name);
console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);