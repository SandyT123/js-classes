const myNum = [1, 2, 3, 4];
let acc = 0; //not give val like this

//array.reduce(callbackFn, initialValue) => syntax initialval = 0;

const mytotal = myNum.reduce((acc, currVal) => {
  console.log(`value of acc ${acc} and curval is${currVal}`);
  return acc + currVal;
});

// const mytotal = myNum.reduce((acc, currVal) => acc + currVal, 0);
// console.log(mytotal);

const shoppingCart = [
  {
    itemName: "js",
    price: 2999,
  },
  {
    itemName: "react",
    price: 999,
  },
  {
    itemName: "DSA",
    price: 3999,
  },
  {
    itemName: "AIML",
    price: 5999,
  },
];

let payment = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(payment);
