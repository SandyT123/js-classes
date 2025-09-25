//Object form with ,literals then its not a singleton object 
//Object form with ,constructor then its singleton object
/**************************************************************/

//singleton
//Object.create  //we can create object like This is the method, constructor method and we called it singleton


//Object literals 
const mySym = Symbol("key1")

const JsUser ={
 name:"sandeep", //we can use here name, but in object it consider "name"
 age:18,
 "full Name" : "sandeep patil",
 [mySym] : "mykey1",
 location:"banglore",
 email:"sandy@123.com",
 isLoggedIn:false,
 lastLoggedInDays:["monday","saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full Name"])
// console.log(JsUser[mySym]);

// JsUser.email = "sandy@1234.com";
// Object.freeze(JsUser)
// JsUser.email = "sandy@12.com";
// console.log(JsUser);

JsUser.gretings = function(){
    console.log("helo js user");
}

JsUser.gretingTwo = function(){
    console.log(`my name is ${this.name}`);
}

console.log(JsUser.gretings); //function reference given
console.log(JsUser.gretings());
console.log(JsUser.gretingTwo());


