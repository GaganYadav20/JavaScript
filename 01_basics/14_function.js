function calculateCartPrice(val1,val2,...num1){
return num1
}
// console.log(calculateCartPrice(200,400,300,2000))

const user ={
    userName:"Gagan",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
    userName:"sam",
    price:399
})

const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));