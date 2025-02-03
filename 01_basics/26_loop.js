const myNums = [1, 2, 3, 4]
const myTotal = myNums.reduce((acc, num) => acc + num, 0)
console.log(myTotal);

const totalCart = [
    {
        product: 'laptop',
        price: 1000
    },
    {
        product: 'mouse',
        price: 25
    },
    {
        product: 'keyboard',
        price: 50
    }
]

const total = totalCart.reduce((acc, item) => acc + item.price, 0)
console.log(total);