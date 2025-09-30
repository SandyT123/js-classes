const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newnum = myNumbers.map((num) => num + 10);
// console.log(newnum); // return array

const myNum = myNumbers.forEach((item) => {
  console.log(item + 10);
  //   return item + 10;// not work return
});
console.log(myNum);

const newMap = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 10)
  .filter((num) => num > 40);
console.log(newMap);
