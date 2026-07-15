const user = {
    username: "hitesh",
    price: 999,

    welcomMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        }

}

// user.welcomMessage()
// user.username = "sam"
// user.welcomMessage()

// console.log(this);

// function chai(){
//     let username = "Nikhil"
//      console.log(this.username);
// }

// chai()

// const chai = function (){
//     let username = "Nikhil"
//     console.log(this.username);
// }

// chai()

const chai =  () =>{
    let username = "Nikhil"
    console.log(this.username);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 
// }

// console.log(addTwo(3, 4));


// const addTwo = (num1, num2) =>   num1 + num2 

// const addTwo = (num1, num2) =>  ( num1 + num2 )

const addTwo = (num1, num2) =>  ({usrname: "Nikhil"})


console.log(addTwo(3, 4));


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()