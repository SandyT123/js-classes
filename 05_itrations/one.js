// for loop

// for (let i = 1; i <= 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("5 is best number");
//   }
//   console.log(element);
// }
// console.log(element);

// for (let i = 1; i <= 10; i++) {
//   console.log(`outer loop ${i}`);

//   for (let j = 1; j <= 10; j++) {
//     // console.log(`Inner loop ${j} and inner loop ${i}`);
//     console.log(i + "*" + j + " = " + i * j);
//   }
// }

// let myArray = ["flash", "batman", "superman", "shaktiman"];
// // console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log(element);
// }

// Break and continue
// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log("Detected 5");
//     break;
//   }
//   console.log(`Value of i is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("Detected 5");
    continue;
  } //This condition allow, detect, pass one time and pass to next values
  console.log(`Value of i is ${index}`);
}
