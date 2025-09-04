"use strict"; // Treat all js code as newer version
// alert("Hello") we are using nodejs, not browser

console.log(3 + 3); //code readablity should be high
console.log("heello");

//tc 39.es ecmasript doc
//mdn doc

let name = "sandeep";
let age = 23;
let isLoggedIn = true;

//please visit above docs for this
//premitive datatypes ==>
//number => 2 to the power of 53
//string => "sandeep"
//boolean=> true or false
//null => standalone value or empty value
//undefiened

//bigInt
let num = 3n ** 53n; // for this line if u want to get the value u have to add 'n' at the end  or else below method
// let num = BigInt(3 ** 53);
console.log(num);

// let x = Symbol(10);
// let y = Symbol(10);
// console.log(x === y);
// console.log(x.toString());
// console.log(x.description);

//symbol => uniqueness
let names = Symbol("names");
let std = {
  age: 23,
  gender: "male",
  //   [names]: "sandeeppatil",
};
std[names] = "sandypatil";
// console.log(std);

// for (const key in std) {
//   console.log(key);
// }

// console.log(JSON.stringify(std));
// for the loop and json format the hidden value cant visible if u want to see make it string

console.log(typeof name);
console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof null);
console.log(typeof undefined);
