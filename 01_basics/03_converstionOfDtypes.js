//conversion of datatypes

let score = "33aaaa";
console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let a = null; // 0
let b = undefined; // Nan
let c = true; // 1

// "33" => 33
// "33avcd" => NaN
// true ==> 1, false ==> 0

let isLoggedIn = "";
let boolenIsloggedIn = Boolean(isLoggedIn);
console.log(boolenIsloggedIn);

// 1 => true or 0 => false
// "" => false or "sandeep" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);

// ********************************************Operations*****************************************************

console.log("**************");

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 * 2);
// console.log(2 - 2);
// console.log(2 ** 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);

let str1 = "hello";
let str2 = "sandeep";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 3);
// console.log(1 + 2 + "3");

console.log(2 + (3 * 4) / 5); // Dont write the messi code or else use the parenthesis for that *Read doc

console.log(true);
console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2; // Dont use kind of this *Read doc

let gameCounter = 100;
gameCounter++; // pre and post increment differ *Read doc
console.log(gameCounter);

//Link to study
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
