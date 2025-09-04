//conversion of datatypes

let score = "3oooo3";
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
