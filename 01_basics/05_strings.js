// strings in js
const name = "sandeep";
const repoCount = 50;

// console.log(name + repoCount + " value");

console.log(
  `Hello my name is ${name.toUpperCase()} and my repo count ${repoCount}`
);

const gameName = new String("sandeep-it-comss");
console.log(typeof gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("n"));

// const newString = gameName.substring(0, 4);
// console.log(newString);
// const anotherString = gameName.slice(-10, 4);
// console.log(anotherString);
//Read doc

const newStringOne = "   sandeep  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20/choudary";
console.log(url.replace("%20", "-"));
console.log(url.includes("hitesh"));

console.log(gameName.split("-"));
