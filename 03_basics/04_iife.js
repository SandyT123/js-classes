// IMMIDIATE INVOCATION FUNCTION EXPRESSION (IIFE)

(function myCode() {
  console.log("My DB connected to server");
})();

((name) => {
  console.log(`DB is connected to ${name}`);
})("Database");
