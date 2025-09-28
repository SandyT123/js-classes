const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
  console.log(item);
  //   return item;
});
// console.log(values);
// undefine will come foreach never return any val

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newnum = myNum.filter((num) => num > 4); //retuns the val
// console.log(newnum);

// const newnum = myNum.filter((num) => {
//   // when you open {} braces you have to mention return
//   return num % 2;
// }); //retuns the val
// console.log(newnum);

// const newNum = [];
// myNum.forEach((num) => {
//   if (num > 4) {
//     newNum.push(num);
//   }
// });
// console.log(newNum);

const books = [
  { title: "book one", publish: 1998, edithion: "2001", context: "History" },
  { title: "book two", publish: 1898, edithion: "2001", context: "science" },
  {
    title: "book three",
    publish: 1998,
    edithion: "2001",
    context: "social science",
  },
  { title: "book four", publish: 1992, edithion: "2001", context: "comic" },
  { title: "book five", publish: 1993, edithion: "2001", context: "story" },
  { title: "book six", publish: 1994, edithion: "2001", context: "netflix" },
  { title: "book seven", publish: 1995, edithion: "2001", context: "charitre" },
  {
    title: "book eight",
    publish: 1996,
    edithion: "2001",
    context: "atmakatha",
  },
  {
    title: "book nine",
    publish: 1997,
    edithion: "2001",
    context: "sports",
  },
  { title: "book ten", publish: 1998, edithion: "2001", context: "innovation" },
  { title: "book eleven", publish: 1999, edithion: "2001", context: "science" },
];

const userBook = books.filter((book) => {
  return book.publish < 1995 && book.context === "science";
  //   return book.title.includes("book seven");
  //   console.log(book.title === "book ten");
});

// console.log(userBook);
