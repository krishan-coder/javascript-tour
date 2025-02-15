// singleton object-> only when made by the constructor else it is not singleton object
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Krishan",
    0 : 21,
    location : "UP",
    email : "krishangoogle.com",
    isLogged : true,
    lastLogIn : ["Monday", "Saturday"],
    true : 1,
    // mySym : "myKey1", not correct way to use as the symbol
    [mySym] : "myKey1"  // correct way

}
console.log(JsUser.email)  // krishangoogle.com  not good way
console.log(JsUser["email"])  // krishangoogle.com  (key are string) but 
console.log(JsUser[0])  // untill not given as number 
// console.log(JsUser.0)   // this will give error

console.log(JsUser["true"])  // 1
console.log(JsUser.true)    // 1


// // on using wrong way
// console.log(JsUser.mySym)   // myKey1
// console.log(JsUser[mySym])   // myKey1 
// console.log(typeof JsUser.mySym)  // string (type = string)

// using the correct way of symbol
console.log(JsUser.mySym)   // undefined
console.log(JsUser[mySym])   // myKey1 
console.log(typeof JsUser.mySym) // underfined (type = Symbol)



//########## to change the value 

console.log(JsUser.location)  //UP
JsUser.location = "UK"
console.log(JsUser.location) // UK



// to lock the value (not to be changed)  ###############

Object.email = "krishansingh.com"
console.log(JsUser.email)   // krishangoogle.com
// Object.freeze(JsUser)  // freezes the user details (cannot be altered)

Object.email = "krish01.com"  // doesn't show any error but changes not reflect
console.log(JsUser.email)    // krishangoogle.com

console.log(JsUser)
// {
//     '0': 21,
//     name: 'Krishan',
//     location: 'UK',
//     email: 'krishangoogle.com',
//     isLogged: true,
//     lastLogIn: [ 'Monday', 'Saturday' ],
//     true: 1,
//     [Symbol(key1)]: 'myKey1'  (* to be noticed as symbol)
//   }


JsUser.greeting = function(){
    console.log("Hello Js user")
}
console.log(JsUser.greeting) // [Function (anonymous)]
console.log(JsUser.greeting()) //  Hello Js user

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`)
}
console.log(JsUser.greetingTwo())  // Hello Js user, Krishan
