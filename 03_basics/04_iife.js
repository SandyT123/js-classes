// IMMIDIATE INVOCATION FUNCTION EXPRESSION (IIFE)

(function myCode() {
  console.log("My DB connected to server");
})();

((name) => {
  console.log(`DB is connected to ${name}`);
})("Database");

// Call stack in js
// Order of exicution through exicution context ===> lifo -last in first out
// Exicution context for global and functional EC
const user = {
  husbandAddress: "Taradale",
  wifeAdresss: "patil",
};
const userSpouse = {
  husband: "sandeep",
  wife: "sandhya",
};

function welcomeMessage(date, place) {
  console.log(
    `${this.husband} ${user.husbandAddress}, will marry ${this.wife} ${user.wifeAdresss} soon on ${date} and place is ${place}`
  );
}
welcomeMessage.call(userSpouse, "march 26 2028", "ankali");
welcomeMessage.apply(userSpouse, ["march 26 2028", "ankali"]);
let box = welcomeMessage.bind(userSpouse, "march 26 2028", "ankali");
// console.log(box);
box();
