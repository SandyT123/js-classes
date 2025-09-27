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
