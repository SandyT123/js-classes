//Comparison operator

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 > 1);
console.log(2 < 1);
console.log(2 != 1);
console.log(2 == 1);

console.log("2" < 1);
console.log("02" > 1); //js autoconvert string to num in this case

//comparison convert null to number and treated as 0 value
/*
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
avoid this type of comparison bez it confuses */

//strict check ===
console.log("2" === 2);
