const user = {
    userName: "Gagan",
    price: 199,
    welcomeMessage: function () {
        console.log(`${this.userName}, Welcome to Website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.userName="sam"
// user.welcomeMessage()`
// console.log(this); // window object

// function chai(){
//     let userName="Gagan"
//     console.log(this.userName);

// }
// chai()

// const chai=function(){

//         let userName="Gagan"
//         console.log(this.userName);
// }
// chai()

const chai = () => {

    let userName = "Gagan"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({userName:"gagan"})

console.log(addTwo(3, 5))