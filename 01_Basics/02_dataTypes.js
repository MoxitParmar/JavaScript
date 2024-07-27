"use strict" // treat all JS code as new version of JS

// alert("Hello, World!") // we are using node.js not browser so this will not work

console.log(6345 + 3456);
console.log("");


// all the js datatypes with examples
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. Object

// Number
let num = 34;
console.log(typeof num);
console.log(num);
console.log("");


// String
let str = "Hello, World!";
console.log(typeof str);
console.log(str);
console.log("");


// Boolean
let isTrue = true;
console.log(typeof isTrue);
console.log(isTrue);
console.log("");


// Undefined
let undef;
console.log(typeof undef);
console.log(undef);
console.log("");


// Null
let n = null;
console.log(typeof n);  // note: type is object not null
console.log(n);
console.log("");


// Symbol
// A symbol is a unique and immutable data type that is often used to identify object properties.
let sym = Symbol("This is my first symbol");
console.log(typeof sym);
console.log(sym); 
console.log("");

// Object
let obj = {
  name: "Moxit",
  age: 21,
  city: "Surendranagar",
};
console.log(typeof obj);
console.log(obj);

//******************************************************************************* */
//summary

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// A symbol is a unique and immutable data type that is often used to identify object properties.
const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// the typeof of all the data types
// null -> object
// array -> object
// function -> function
// object -> object
// symbol -> symbol
// string -> string
// number -> number
// boolean -> boolean
// undefined -> undefined