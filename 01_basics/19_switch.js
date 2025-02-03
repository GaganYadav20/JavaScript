// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("Apr");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("agu");
        break;
    case 9:
        console.log("spt");
        break;
    case 10:
        console.log("oct");
        break;
    case 11:
        console.log("nov");
        break;
    case 12:
        console.log("Dec");
        break;

    default:
        break;
}

// falsy value

// false 0, -0, BigInt,"", null,undefined,NaN|

//truthy values

//"0", "false"," ", [], {},function(){},

// nullish coalescing Operation (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 10
console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice=100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");

