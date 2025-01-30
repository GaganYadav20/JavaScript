// const tinderUser=new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Gagan",
            lastName: "Yadav"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }
// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2,obj4)
const obj3 = { ...obj1, ...obj2, ...obj4 }  //spred drop the glass
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "gagan@gmail.com"
    },
    {
        id: 1,
        email: "gagan@gmail.com"
    },
    {
        id: 1,
        email: "gagan@gmail.com"
    }
]

// console.log(user[1].email)

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName: "Coding",
    price: "999",
    courseTeacher: "ydv"
    
}
// console.log(course.courseTeacher)

const { courseTeacher: instructor } = course
// console.log(courseTeacher);
console.log(instructor);

// {
//     name:"gagan",
//     pric: "999",
//     courseTeacher: "ydv"

// }
[
    {},
    {},
    {}
]

