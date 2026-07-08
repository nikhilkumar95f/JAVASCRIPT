const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = [ "superman", "flash" , "batman"]

// marvel_heros.push(dc_heros) // add to the end of the array

// console.log(marvel_heros) // ["thor", "ironman", "spiderman", ["superman", "flash" , "batman"]]
// console.log(marvel_heros[3][1])   // flash

// const allHeroes = marvel_heros.concat(dc_heros) // concat method to merge two arrays
// console.log(allHeroes) 

const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator

console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7,[6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Nikhil")) // false
console.log(Array.from("Nikhil")) 
console.log(Array.from({name: "Nikhil"})) // [] //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // [100, 200, 300]

 