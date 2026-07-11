
function sayMyName() {
console.log("N");
console.log("I");
console.log("K");
console.log("I");
console.log("L");
}

// sayMyName();


// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }


function addTwoNumbers(num1, num2) {
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(3, 4);

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return
        
    }
    return `${username} just looged in ` 
}

// console.log(loginUserMessage("Nikhil"))
// console.log(loginUserMessage())

