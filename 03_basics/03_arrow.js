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

//// AK - This concept
// This keyward work diffrently for diffrent circumstances
// for browser, nodejs, inside fn, global, arrow fn

// "use strict"

//This in global spaces
console.log(this);
// Inside browser ==> window object; Inside nodejs ==> global object
// Inside nodejs global object is diffrent

//This inside a function
function x() {
  //the value dependes on strict / non strict mode
  console.log(this);
}

// for global this and inside function this is wont same
// This keyward works diffrently in strict mode and non strict mode

// This inside non strict mode
// this keyward will be replaced with globalObject

//This keyward value depends on how function is called
x(); //undefine in SM
window.x(); // window

//This inside an object method

//when you create a function as a part of an object is called method
// const obj = {
//   a: 10,
//   x: function () {
//     //x is method
//     console.log(this.a); //10, here this represent this perticular obj
//   },
// };
// obj.x();

// please read about call, apply, and bind methods in js (sharing methods)

//call method
const student = {
  name: "sandeep",
  printName: function () {
    console.log(this.name);
  },
};
student.printName();

const student2 = {
  name: "akanksha",
};

student.printName.call(student2);
//now it will overide and print akanksha from student one printName
//value of this = student2

//This keyward behaves in arrow function
// Arrow function does not have own this method they take, value of enclosing lexical context

const obj = {
  a: 10,
  x: function () {
    console.log(this); // value of this is obj
  },
};
obj.x();

const obj2 = {
  a: 10,
  x: function () {
    // const y = () => {
    //   console.log(this);
    // };
    // y();
    // Here own this is not their for arrow fn, value of enclosing lexical context
    // Enclosing context is function here, function where it present that is the value
  },
};
obj2.x();

//This keyward inside the DOM elements => Refrence to html element

/*<button onClick="alert(this.tagname)">click me</button>;*/
