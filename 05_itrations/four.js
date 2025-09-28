//for in loop

const myObj = {
  js: "javascript",
  cpp: "c++",
  rb: "ryby",
  swift: "swift by apple",
};

// for (const key in myObj) {
//   console.log(`${key} shortcut is for ${myObj[key]}`);
// }

// Can we use for in for array
// const programming = ["js", "rb", "py", "cpp", "java"];
// for (const key in programming) {
//   console.log(programming[key]);
// }

//for in whether it work for map
const map = new Map();
map.set("IN", "India");
map.set("USA", "United states of america");
map.set("FR", "france");
map.set("IN", "India"); // repeat wont work
// console.log(map);

// for (const key in map) {
//   console.log(key); //map isnot itratable
// }
