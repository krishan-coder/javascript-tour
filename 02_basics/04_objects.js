// how to make object singleton or by the constructor

const newUser = new Object()  // singleton object
// const newU = {}  // non singleton object

console.log(newUser); // {} 

newUser.id = "123"
newUser.name = "Samay"
newUser.isLoggedIn = false

const regularUser = {
    email : "some@gmail.com",
    userFullname : {
        firstName : "Krishan",
        lastName : "Singh"
    }
}
console.log(regularUser.email)  // some@gmail.com
console.log(regularUser.userFullname)
// { firstName: 'Krishan', lastName: 'Singh' }

console.log(regularUser.userFullname.lastName)  // Singh

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj5 = {5: "e", 6: "f"}

// ## concating two objects // we can concat many objects
// 1->
const obj3 = {obj1, obj2, obj5}
console.log(obj3)
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// 2->
const obj4 = Object.assign({}, obj1, obj2) 
console.log(obj4)  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// working of the assign function (it add the second obj to the first)
            const target = { a: 1, b: 2 };
            const source = { b: 4, c: 5 };

            // here source ele are assigned to target
            const returnedTarget = Object.assign(target, source);

            console.log(target);
            // Expected output: Object { a: 1, b: 4, c: 5 }

            console.log(returnedTarget === target); // due to property - true 
            // Expected output: true

// 3 -> using spread operator( ...obj)
const objN = {...obj1, ...obj2}
console.log(objN)  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// array of objects
const users = [
    {
        id: 1,
        email: "abs@gmail.com"
    },
    {
        id: 2,
        email: "abs@gmail.com"
    },
    {
        id: 1,
        email: "abs@gmail.com"
    }
]
users[1].email // gives the email of the users[1]

console.log(Object.keys(newUser))  // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(newUser))  // [ '123', 'Samay', false ]
console.log(Object.entries(newUser)) 
// [ [ 'id', '123' ], [ 'name', 'Samay' ], [ 'isLoggedIn', false ] ]

console.log(newUser.hasOwnProperty("isLoggedIn")) // true
console.log(newUser.hasOwnProperty("isLogged"))   // false