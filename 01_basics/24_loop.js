const coding = ["js", "python", "java", "c++", "c#", "ruby", "php"]

// coding.forEach(function (item) {
//     console.log(item)
//  })

// coding.forEach((item ,index, arr)=>{
//     console.log(item,index,arr)
// })

const myCoding=[
    {
        language:"js",
        name:"javascript"
    },
    {
        language:"python",
        name:"python"
    },
    {
        language:"java",
        name:"java"
    }
]

myCoding.forEach((item)=>{
   console.log(item.language,item.name)
})