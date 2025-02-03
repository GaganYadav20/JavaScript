const coding = ["js", "python", "java", "c++", "c#", "ruby", "php"]

// const values=coding.forEach( (item) => {    
//     console.log(item)
//     return item
//  })
//  console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newnums=myNums.filter((num)=>{
//     return num>5
// })

const myNum = []
myNums.forEach(element => {
    return myNum.push(element*2)
});

// console.log(myNum);

const usersBooks = [
    {
        name: "John",
        books: ["js", "python", "java"],
        publish:2015
    },
    {
        name: "Jane",
        books: ["c++", "c#", "ruby"],
        publish:2003
    },
    {
        name: "Tom",
        books: ["php", "java", "js"],
        publish:2019
    }
]

const newBooks = usersBooks.filter((user) => {
    return user.books
})
console.log(newBooks);
