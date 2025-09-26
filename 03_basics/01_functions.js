
function sayMyName () {
console.log("s");
console.log("a");
console.log("n");
console.log("d");
console.log("e");
console.log("e");
console.log("p");
}

// sayMyName // refrence
// sayMyName(); //exicuation

// function addTwoNum (number1 , number2) {
//    console.log(number1 + number2);
// }

// addTwoNum(3,5); //8
// addTwoNum(3,"5"); //35
// addTwoNum(3,"a"); //3a
// console.log(addTwoNum(3,null)) //3
// console.log(addTwoNum(3,"")) //3
// console.log(addTwoNum(3)) //NaN
// console.log(addTwoNum(3,"san")) //3san

function addTwoNum (number1 , number2) {
    // let result = number1 + number2;/
    // return result;      // after return no code excecute next
    return number1 + number2;
   console.log("sandeep");
};
let result = addTwoNum(3,5);
// console.log("Result" , result);

function loginUser (userName = "sandy"){ // If nothing is passed then u can set the default value for that like this
    if(!userName){  // "" and undefined = false and !userName is true here
       console.log("please enter a userName");
       return
    }
    return `${userName} just loggedIn`
}

// console.log(loginUser("sandeep"));
// console.log(loginUser(""));
// console.log(loginUser()); //if value doesnt exist then it will be undefined/
// console.log(loginUser("maga"));

function calculateCartPrice(val1, val2, ...num1){ 
    //return array with Rest of values called restoperator
     return num1 //return only num val
}
console.log(calculateCartPrice(200, 300, 400,3000));
 
// pass the object in function
const user = {
    userName : "sandeep",
    price : 199
}

function handleObject (anyObject){
  console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
} 

// handleObject(user)
handleObject(
    {userName:"sam",price:399}
)

// Now passing of array
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
   return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([300, 600, 900, 1000]))


