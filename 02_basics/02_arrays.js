const marvel = ["thor" , "Ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel.push(dc)
console.log(marvel);  //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]  it adds another array as an element

// concat return the new array after concatinating
const combineHero = marvel.concat(dc)

console.log(combineHero)  
// [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const all_new_heros = [...marvel, ...dc] // always 3 dots no matter the length of array

console.log(all_new_heros)  
// [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_arr = [1,2,3,[4,5,6],7,8,[9,10,[11,12]]]
const real_another_arr = another_arr.flat(Infinity)

console.log(real_another_arr)
/*[
   1,  2, 3, 4,  5,
   6,  7, 8, 9, 10,
  11, 12
]*/

console.log(Array.isArray("krishan"))  // false
console.log(Array.from("krishan"))
// [
//     'k', 'r', 'i',
//     's', 'h', 'a',
//     'n'
//   ]


//********** */
console.log(Array.from({name : "krishan"})) // [] 
// gives an empty array because we have not defined the element(key or value) to be formed as array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));   // [ 100, 200, 300 ]
// Returns a new array from a set of elements.