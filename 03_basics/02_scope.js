// Scope in js
// var c = 300; // Global scope
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("Inner",a);
  // var c = 30;
  //   c = 30 // for this also like var it consider
}

// console.log(a);
// console.log(b);
// console.log(c);

// Nested scope

function one() {
  const userName = "sandeep";

  function Two() {
    const website = "youtube";
    console.log(userName);
  }
  // console.log(website);
  //   Two();
}
one();
// Here from parent function you can access var for child function  but not vice versa

if (true) {
  let userName = "sandy";
  if (userName === "sandy") {
    const website = "youtube";
    // console.log(userName + website);
  }
  //   console.log(website);
}
// console.log(userName);

//=============================interesting+++++++++++++++++++++++++++++++++

console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

console.log(addTwo(7)); //Cannot access 'addTwo' before initialization
const addTwo = function (num) {
  //This we called function expression like var
  return num + 2;
};
