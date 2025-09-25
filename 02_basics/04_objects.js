// How to use singleton or constructor for creating object
// const tinderUser = new Object(); //{}, singleton
const tinderUser = {}; //non-singleton
// console.log(tinderUser); //{}

tinderUser.id = "123abc";
tinderUser.name = "sam";
tinderUser.isLoggedIn = false
// console.log(tinderUser); 

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullName:{
            firstName:"sandeep",
            lastName:"taradale"
        }
    }
}
// console.log(regularUser.fullName?.userFullName.firstName);
//optional chaining,( ? ) if fullname value is their or not if their then only proceed or else if else condition

const obj1 = {
    1:"a",
    2:"b",
    3:"c"
}

const obj2 = {
    4:"d",
    5:"e",
    6:"f"
}

const obj3 = {
    7:"g",
    8:"h",
    9:"i"
}

// obj3 = {obj1,obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3); //Copy the values of all of the enumerable own properties 
// from one or more source objects to a target object.Returns the target object. 
// {} => target
// source => obj1, obj2, obj3

// obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);
 
const users = [
    {
        id :1,
        email:"sandeep@gmail.com"
    },
     {
        id :2,
        email:"sandu@gmail.com"
    },
     {
        id :3,
        email:"sandy@gmail.com"
    },
] 

console.log(users[1].email)
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //return object keys
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    name:"js in hindi",
    price :1000,
    courseInstructor:"sandeep"
}
// course.courseInstructor

//obj destructuring
const { courseInstructor : instructor } = course;
console.log(instructor);

/// Api concepts - api call
// Below given code is piece of Json not object but similar to obj
// some time api response should be in json form or object form You need to make arrangement using json formatter

// {
//     "name" : "sandeep",
//     "courseName" : "js in hindi",
//     "price" : "free"
// }

