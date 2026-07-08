// Array

const myArray = [0, 1, 2, 3, 4, 5];
const myHeros = ["Spiderman", "Ironman", "Hulk", "Thor"];

const myArray2 = new Array(1, 2, 3, 4, 5);
//console.log(myArray[1]); 

//Array Methods

// myArray.push(6); // add to the end of the array
// myArray.push(7); // add to the end of the array
// myArray.pop(); // remove the last element of the array

// myArray.unshift(9); // add to the beginning of the array    
// myArray.shift(); // remove the first element of the array

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

// const newArray = myArray.join()

// console.log(myArray); 
// console.log(newArray);
// console.log(typeof newArray); // string


// slice and splice

console.log("A",myArray)

const myArray3 = myArray.slice(1, 3); // slice(start, end) - end is not included

console.log(myArray3);
console.log("B",myArray)


const myArray4 = myArray.splice(1, 3); // splice(start, end) - end is included
console.log( "C", myArray);
console.log(myArray4);


