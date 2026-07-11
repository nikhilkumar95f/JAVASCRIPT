
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

function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Nikhil",
    age: 20,
    
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);  
}

// handleObject(user)
 handleObject({
    username: "Nikhil",
    age: 20,
 })

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));
