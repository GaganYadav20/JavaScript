//for In

const myObject = {
    js: 'Javascript',
    py: 'Python',
    rb: 'Ruby',
    java: 'Java',
    cs: 'C#'
}

for (const key in myObject) {
    console.log(`key is ${key} and value is ${myObject[key]}`);

}

const myArray = ['apple', 'banana', 'grapes', 'orange'];

for (const key in myArray) {
    console.log(key);
   
}