const accountId=1344
let accountEmail="gaganyadav20@gmail.com"
var accountPassword="2346"
accountCity="pune"
let accountState;

/*
Prefer not to use var
because of issue in block  scope and functional scope
*/ 

// accountId = "234" // not allowd
accountEmail="hc@hc.com"
accountPassword="23"
accountCity="lko"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])