/// Dates
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());

// console.log(typeof myDate);

//let myCreatedDate = new Date(2023, 0, 23); //here month starts from 0  in dates
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toLocaleString());

//let myCreatedDate = new Date("2023-01-14"); //yy/mm/dd
//console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2023"); //mm/yy/dd
// console.log(myCreatedDate.toLocaleString());

//Time stamp
let timeStamp = Date.now();
//console.log(timeStamp); // inmili sec from startdate jan 1 1970 to till
// console.log(myCreatedDate.getTime());
//console.log(Date.now() / 1000); // converting to sec
//console.log(Math.floor(Date.now() / 1000)); // Remove decimal value

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

// `${newDate.getDate} on this date i will come back again`;
newDate.toLocaleString("default", {
  weekday: "long",
});
