// # Primitive data types
// 7 types -> These are the call by value
// String, Number, Boolean, null, undefined, Symbol(to make any value unique),
// BigInt(scientific value)






// Js is dynamically typed language ( type of the variable is determined at the run time)

//Symbols
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id);  //Symbol(123)
console.log(anotherId); // Symbol(123)


console.log(id  == anotherId); // false
console.log(id  === anotherId); // false

const bigNum  = 897432987574389753  //js uses BigInt to store large integer
console.log(bigNum); //897432987574389800
console.log(typeof bigNum);// number


const bigNumber  = 897432987574389753n
console.log(bigNumber); //897432987574389753n
console.log(typeof bigNumber); //bigint



// Reference type (Non primitive)
// Array, Objects, Functions

// Array
const cars = ["Bently" , "Sedan", "Supra mk4"]
console.log(cars);

// Object
 let myObj = {
    name:"krishan",
    age : 21
}

console.log(myObj);

// Function
const myFunction = function(){
    console.log("Function is called.");
    
}
myFunction()
console.log(typeof myFunction) //function


// Documentations
// https://262.ecma-international.org/5.1/#sec-11.4.3




// ##################### Memory #####################

//Stack(Primitive) (value) , Heap (Non-Primitive) (reference)


// these are store in stack and copies are made and given to another variable
// changed doesn't reflect back
let name = "krishan"
let newName = name
newName = "radha"
console.log(name); //krishan
console.log(newName); //radha


// these uses heap and reference is give to the other type , changes reflect back to original
let userOne = {
    email : "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "krishan@google.com"
console.log(userOne.email); // krishan@google.com
console.log(userTwo.email); //krishan@google.com



