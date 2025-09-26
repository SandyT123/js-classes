const user = {
  userName: "sandeep",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName} , welcome to website`);
    // console.log(this);
  },
};

user.welcomeMessage();
user.userName = "sam";
user.welcomeMessage();

// console.log(this);

// function chai() {
//   let userName = "sandeep";
//   console.log(this.userName);  // undefine and this works
//   // Here it gives undefine bez this use only in case of object
// }
// chai();

// const chai = function () {
//   let userName = "sandeep";
//   console.log(this.userName); // undefine and this works
// };

const chai = () => {
  // {}, Here this will not work, for fat arrow fn
  let userName = "sandeep";
  console.log(this);
};
// chai();

// console.log(this);
// {} , Here this will not work, bez it is in node not browser & arrow function also same

// Arrow function
// const addTwo = (num1, num2) => {
//   return num1 + num2; // Explisit return
// };

// const addTwo = (num1, num2) => num1 + num2; //implesit return
// const addTwo = (num1, num2) => (num1 + num2);

//Here for object you have to add ({}), then only works or else undefined
// const addTwo = (num1, num2) => {
//   userName: "sandeep";
// }; // undefined

const addTwo = (num1, num2) => ({ userName: "sandeep" });

// Note* : for implesit return
// {}, you have to add return
// (), No need to add return
console.log(addTwo(3, 4));

// const myArray = [1, 2, 3, 4, 5, 6];
// myArray.forEach(function(){})
// myArray.forEach(()=>{})
// myArray.forEach(()=>())
//looping and function formates
