let score = 33
// console.log(typeof score);
// console.log(typeof (score)); // number

let str = "67"
let valInNUM  = Number(str) // conversion
// console.log(typeof valInNUM); // number
// console.log( valInNUM);  // 67


let str1 = "67abc"
let valInNUM1  = Number(str1)
// console.log(typeof valInNUM1); // number
// console.log( valInNUM1); // NaN -> not a number

let val = null
let val1  = Number(val) // conversion
// console.log(typeof val1); // number
// console.log( val1); // 0


let un = undefined
let un1  = Number(un) // conversion
// console.log(typeof un1); // number
// console.log( un1); // NaN

let b = true
let b1  = Number(b) // conversion
// console.log( b1); // 1


let s = "krisha"
let s1  = Number(s) // conversion
// console.log( s1); // NaN

let loggIn = "hitesh123"
let bool = Boolean(loggIn) // conversion Boolean
// console.log(bool); // true

// "false" in 0, null, undefined 
// else all other value gives "true"

// String() etc conversion




// **************************** Operations ****************************


let num = 3
let newN = -num
console.log(newN); // -3

// console.log(6+5);
// console.log(6-5);
// console.log(6%5);//1
// console.log(2**3);//8 power

// console.log("4" + "5");
// console.log("4" + 5);
// console.log(4 + "5"); //45
// console.log(4 + "5" + "7"); //457
// console.log(4 + 5 + "7"); // 97
// console.log("4"+ 5 + 7 ); // 457
// in string the first data type is considered for all other data_type if cannot be converted to other implicitly

console.log(true); // true
console.log(+true); // 1
console.log(+""); // 0

let num1, num2, num3
num1 = num2 = num3 = 2+2

let a = 9
console.log(a); // 9
console.log(++a); // 10
console.log(a++); // 10
console.log(a); // 11


