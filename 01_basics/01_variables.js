const accountId = 123456
let accountEmail = "user@example.com"
var accountPassword = "password123"
accountCity = "Gopalganj"
let accountState ;

// accountId = 2 //this is not allowed 

accountEmail = "nikhil@gmail.com"
accountPassword ="35645"
accountCity = "barauli"


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail, accountPassword,accountCity,accountState])
