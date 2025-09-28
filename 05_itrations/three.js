// for of loop

// ["", "", ""];
// [{}, {}, {}];

// const arr = [1, 2, 3, 4, 5, 6];
// for (const num of arr) {
//   console.log(num);
// }

// const greetings = "hello world";
// for (const greet of greetings) {
//   console.log(`Each char is ${greet}`);
// }

// Maps
const map = new Map();
map.set("IN", "India");
map.set("USA", "United states of america");
map.set("FR", "france");
map.set("IN", "India"); // repeat wont work
console.log(map);

// for (const [key, value] of map) {
//   console.log(key, value);
// }

const myObj = {
  game1: "NFS",
  game2: "Spider",
};

// for (const [key, value] of myObj) {
//   console.log(key, value);
// }  //Not itratable
