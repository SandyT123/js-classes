
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
// addTwoNum(3,null); //3

function addTwoNum (number1 , number2) {
    // let result = number1 + number2;/
    // return result;      // after return no code excecute next
    return number1 + number2;
   console.log("sandeep");
};
let result = addTwoNum(3,5);
// console.log("Result" , result);

function loginUser (userName = "sandy"){ // If nothing is paased then u can set the default value for that like this
    if(!userName){  // "" and undefined = false and !userName is true here
       console.log("please enter a userName");
       return
    }
    return `${userName} just loggedIn`
}

// console.log(loginUser("sandeep"));
// console.log(loginUser(""));
console.log(loginUser());
console.log(loginUser("maga"));
 



