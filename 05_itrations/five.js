// foreach loop

const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (val) {
//   console.log(val);
// });

// coding.forEach((item) => {
//   console.log(item);
// });

// function printMe(item) {
//   console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach((item, index, arrList) => {
//   console.log(item, index, arrList);
// });

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "java",
  },
  {
    languageName: "react",
    languageFileName: "jsx",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "ruby",
    languageFileName: "ruby",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
