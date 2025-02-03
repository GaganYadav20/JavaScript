// for of

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const num of arr) {
    // console.log(num);
}

const greeting = 'Hello World!';
for (const char of greeting) {
    if (char == " ") {
        continue;
    }
    // console.log(char);
}

//Maps

const myMap = new Map();
myMap.set('In','India');
myMap.set('Us','United States');
myMap.set('Uk','United Kingdom');

console.log(myMap);

for (const [key,value] of myMap) {
    console.log(key);
    
}

const myObject={
    'game1':'NFS',
    'game2':'COD',
}

for (const [key ,value] of myObject) {
    console.log(key);
}