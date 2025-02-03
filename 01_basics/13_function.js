function sayMyName() {
    console.log("G");
    console.log("A");
    console.log("G");
    console.log("A");
    console.log("N");
}
// sayMyName()

// function addTwoNumber(num1,num2){
//     console.log(num1+num2)
// }
// addTwoNumber(4,5)
function addTwoNumber(num1, num2) {
    let result = num1 + num2
    return result
}
// const result=addTwoNumber(4,5)
// console.log("Result:",result);

function loginUserMessage(userName="sam") {
    // if (userName === undefined) {
    //     console.log("Please enter userName.");
    //     return 
    // }
    if (!userName) {
        console.log("Please enter userName.");
        return 
    }
    return `${userName} just loggedIn`
}
console.log(loginUserMessage("Gagan"))
// console.log(loginUserMessage()) //undefined

