const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Dont have email");
}

//Here above we dont compare the values or consider any value
//Assume value like we took string here and run its shows true val

// false values : false, 0, -0, BigInt 0n, "", null, Undefine, NaN
// Truthy values : "0", "false", " ", [], {}, function(){}

//Array
// if (userEmail.length === 0) {
//   console.log("Array is empty");
// }

//Object
const emptyObj = {};
// Object.keys(emptyObj) => returns [], array
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

//Note* :
// false == 0 //true
// false == "" //true
// 0 == "" //true

//***************************Nullish coalescing Operator (??) : null, undefine ******************

// a ?? b   →   if a is NOT null or undefined → return a
//               otherwise → return b

// let valueWithNullish = 0 ?? 100;
// console.log(valueWithNullish); // 0   (because 0 is NOT null or undefined)

// let val1;
// val1 = 5 ?? 100; //5
// val1 = null ?? 10; //10
// val1 = undefined ?? 15; //15
// val1 = null ?? 10 ?? 20; //10
// console.log(val1);

// function greet(name) {
//   let finalName = name ?? "Stranger";
//   console.log("Hello, " + finalName);
// }
// greet("Teja");   // Hello, Teja
// greet(null);     // Hello, Stranger
// greet(undefined);// Hello, Stranger

//Ternary operator
// condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80");

////////////////////////////////// END
