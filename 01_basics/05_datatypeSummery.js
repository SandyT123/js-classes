// # primitive datatypes // call by value
// 7 types : String, Number,  Boolean, null, Undefined, Symbol, Bigint

const score = 100;
const scoreValue = 100.8;
const isLoggedIn = false;
const outSideTemp = null;
let userName = undefined;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 123456787654567756789n;
console.log(bigNumber);

//Refrence type : (Non primitive)
// Arrays, Objects, Functions //Return type of three will come object anf for fun objectfunction

const Heros = ["shaktiman", "krish", "Hanuman"];
let myObj = {
  name: "sandeep",
  age: 22,
};

const myFunction = function () {
  console.log("hello world");
};

console.log(typeof myFunction);
//https://262.ecma-international.org/5.1/#sec-11.4.3

console.log("++++++++++++++++++++++++++++++++++++++");
console.log("++++++++++++++++++++++++++++++++++++++");

// Stack (primitive : Takes only copy)
let myName = "Mychannel";
let anotherName = myName;
anotherName = "helloworld";
console.log(anotherName);
console.log(myName);

// Heap (non-primitive : Takes direct reference)
let userOne = {
  name: "santosh",
  upi: "user@ybl",
};

let userTwo = userOne;
userTwo.name = "sandy@123.com";
console.log(userOne.name);
console.log(userTwo.name);
