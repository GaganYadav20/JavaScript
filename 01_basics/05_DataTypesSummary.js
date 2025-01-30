// primitive

// 7 types : string, number , boolean, null, undefined, symbol, BigInt 

const score = 100
const scoreValue = 100

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 34567891234n

// Reference (non primitive)

// Array, Objects, functions

const heros = ["shaaktiman", "naagrag", "doga"]
let myObject = {
    name: "Gagan",
    age: 19
}

const myFunction = function () {
    console.log("Hello World");

}

// console.log(typeof myFunction);




// **********************Memory********************************

// stack (Primitive), Heap (Non-Primitive)

let myYoutubename="Codewithgagan"

let anotherName=myYoutubename
anotherName="chaiaurcode"

// console.log(anotherName);
// console.log(myYoutubename);

let user1={
    email:"user1@google.com",
    Upi:"user@ybl"
}

let user2=user1

user2.email="gagan@google.com"

console.log(user1.email);
console.log(user2.email);