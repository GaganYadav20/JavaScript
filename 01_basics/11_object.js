//singleton

//object literals
// Object.create

const mySym = Symbol("key1")

const jsUser = {
    name: "Gagan",
    "Full_name": "Gagan Yadav",
    [mySym]: "myKey1",
    age: 18,
    location: "Pune",
    email: "codewithgagan0@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Saturday"]
}

// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser["Full_name"]);
// console.log(jsUser[mySym]);
jsUser.email = "gaganyadav2094@gmail.com"
// console.log(jsUser["email"]);
// Object.freeze(jsUser)
jsUser.email = "gaganyadav@gmail.com"
// console.log(jsUser["email"]);
// console.log(jsUser);

jsUser.greeting1 = function () {
    console.log("Hello js user");
}
console.log(jsUser.greeting1);

jsUser.greeting2 = function () {
    console.log(`Hello js user,  ${this.name}`);
}
// console.log(jsUser.greeting2());
jsUser.greeting2();