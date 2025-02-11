let score = 33
console.log(typeof score);
console.log(typeof (score)); // number

let str = "67"
let valInNUM  = Number(str) // conversion
console.log(typeof valInNUM); // number
console.log( valInNUM);  // 67


let str1 = "67abc"
let valInNUM1  = Number(str1)
console.log(typeof valInNUM1); // number
console.log( valInNUM1); // NaN -> not a number

let val = null
let val1  = Number(val) // conversion
console.log(typeof val1); // number
console.log( val1); // 0


let un = undefined
let un1  = Number(un) // conversion
console.log(typeof un1); // number
console.log( un1); // NaN

let b = true
let b1  = Number(b) // conversion
console.log( b1); // 1


let s = "krisha"
let s1  = Number(s) // conversion
console.log( s1); // NaN

let loggIn = "hitesh123"
let bool = Boolean(loggIn) // conversion Boolean
console.log(bool); // true

// "false" in 0, null, undefined 
// else all other value gives "true"

// String() etc conversion

