const name = "Nikhil"
const repoCount = 10

console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Nikhil-kr')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   nikhil   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://nikhil.com/nikhil%10kumar"

console.log(url.replace('%10', '-'));

console.log(url.includes('nikhil'))
console.log(url.includes('Apple'))

console.log(gameName.split('-'));
