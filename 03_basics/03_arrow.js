//// this and arrow function in js


const user = {
    username : "Krishan",
    price : 999,

    welcomceMessg : function(){
        console.log(`${this.username}, welcome to website` )
        console.log(this)
        // o/p -> {
        //     username: 'Sam',
        //     price: 999,
        //     welcomceMessg: [Function: welcomceMessg]
        //   }
    }
}
user.welcomceMessg()  // Krishan, welcome to website
user.username = "Sam"
user.welcomceMessg()  // Sam, welcome to website

console.log(this)   // {}


function func(){
    let userName = "karan"
    console.log(this.userName);  // undefined
}
func()


// ################### arrow function

const chai = () => {
    let userN = "Karan"
    console.log(this);   //{}
    console.log(this.userN); // undefined
}
chai()

// const addTwo = (num1, num2) =>{
//     return num1 +num2            // explicitly return

// }
// console.log(addTwo(2,5))   // 7

// //$$$ 2nd way
// const addTwo = (num1, num2) => (num1 +num2)   // implicitly return 
// console.log(addTwo(2,5))   // 7

// const addTwo = (num1, num2) => {name : "krish"}   // undefined 
const addTwo = (num1, num2) => ({name : "krish"})   // {name : 'krish'} 
console.log(addTwo(2,5))   // 7





