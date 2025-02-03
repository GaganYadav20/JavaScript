// for loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element==5) {
//         console.log("Five");
//         break;
//     }
//     console.log(i);

// }

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer Loop ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner Loop ${j} and Outer Loop ${i}`);
        // console.log(i +"*"+ j +"="+ i*j);
    }

}

let myArray = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

for (let i = 0; i <= myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

//break and continue

for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        // break;
        console.log(`Detected 5`);
        continue;
    }

    console.log(`value of i is ${i}`);

}