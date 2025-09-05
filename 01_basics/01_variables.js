//variables in javascript
const accountId = 1414141;
let accountEmail = "sandy@123.com";
var accountPassword = 12345;
accountCity = "jaipur";
let accountState;

// accountId = 2 not allowed
accountEmail = "sdfghjk@jj.com";
accountPassword = "212121";
accountCity = "banglore";

// console.log(accountId);
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

//prefer not use to var becz of issue in block scope in functional scopess
