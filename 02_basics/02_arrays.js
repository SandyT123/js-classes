const marvel_heros = ['thor',"ironman","hulk","captain America"];
const dc_heros = ["superman", "krish", "shaktiman"];
const Gods = ["bramha","hanuman","shiv","narayan"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros[4]);
// console.log(marvel_heros[4][1]);

// const all_heros = marvel_heros.concat(dc_heros)
// Combines two or more array to return new array
// console.log(all_heros);

//spread operator
// const all_newHeros = [...marvel_heros, ...dc_heros, ...Gods]
// console.log(all_newHeros);

const another_Array = [1,2,3,[4,5,6],7 ,[6,7,[4,5]]];
let real_Array = another_Array.flat(Infinity);
//flat => returns a new array with all sub array eleimnets, concatinating recursively upto the specific depth
//Infinity is the depth but mostof the time we give specific depth(number)
console.log(real_Array);

console.log(Array.isArray("sandeep")) //checking is a array or not
console.log(Array.from("sandeep")) //You can give obect or string it will convert it into array


// gives [] only, interesting is here its ask while i will make array with keys or value
console.log(Array.from({name: "sandeep"})) 


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));
// Returns new array from set of eliments //var or []

// Read isArray, from, of




 
 





