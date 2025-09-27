// if

//if condition is true then only exicute
// const isLoggedIn = true;
// const temp = 41;
// if (temp === 40) {
//   console.log("less than 50");
// } else {
//   console.log("temp greater then 50");
// }

// console.log("executed");

//comparision operator
// < , >, >=, <=, ==, !=, ===, !==

// const score = 200;
// if (score > 100) {
//   let power = "fly";
//   console.log(`User power ${power}`);
// }
// console.log(`User power ${power}`);

const balance = 1000;
// if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//   console.log("Yes less than");
// } else if (balance < 750) {
//   console.log("less then 750");
// } else if (balance < 900) {
//   console.log("less then 1200");
// } else {
//   console.log("Balance less than 1200");
// }

const userLoggedIn = true;
const debitcard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitcard && 2 == 3) {
  console.log("allow for shoping");
}

if (loggedInFromGoogle || loggedInFromEmail || true) {
  console.log("User Logged In");
}
