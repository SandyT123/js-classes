// Arrays
const myArray = [0, 1, 2, 3, 4, 5];
const myHeros = ["Hulk", "Thainos", "Thor"];
const myArray1 = new Array(1, 2, 3, 4);

// console.log(myArray);
// console.log(myArray1);
// console.log(myArray[0]);

// Arrays methods
// myArray.push(6);
// myArray.pop();

// myArray.unshift(8);
// myArray.shift();
// console.log(myArray);

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));
// console.log(myArray.indexOf(8));

const newArray = myArray.join(); //converts string
// console.log(myArray);
// console.log(newArray);
// console.log(typeof newArray);

//Splice and slice
// console.log("A - full", myArray);
const myn1 = myArray.slice(1, 3);
console.log("slice", myn1);

// console.log("B - full", myArray);
const myn2 = myArray.splice(1, 3);
console.log("splice", myn2);
// console.log("c - full", myArray);
