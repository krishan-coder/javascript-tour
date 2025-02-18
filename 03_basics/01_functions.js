// functions 

// non return type function
// function addTwoNum (num1, num2){  // this will return the undefined 
//     console.log(num1 + num2);
// } 
function addTwoNum (num1, num2){  // return type function
    let res = num1 + num2;
    return res;
}
const result = addTwoNum(3,7);
console.log(result);  // 10

function loginUserMessg(userName){
    return `${userName} just logged in`
}

console.log(loginUserMessg("Krishan"))  // Krishan just logged in


// if we do not pass the argument then it will return undefined

function loginUserMessg(userName){  // can give default value userName="Ram"
    if(userName === undefined || !userName){
        console.log("Please enter a userName")
        return
    }
    return `${userName} just logged in`
}

console.log(loginUserMessg())  
// Please enter a userName
// undefined


//##################################################

// (...xyz) is rest or spread operator according to the use case
function calculateCartPrice(val1, val2,...num1){   // rest operator
    // val1 -> first ele
    // val2 -> second ele
    // num1 is the array of the rest of the elements 
    return num1

}
console.log(calculateCartPrice(299,452,799,2000)) // [500, 2000]



const user = {
    name : "Sam",
    price : 399
}
function handleObj(anyObj){
    console.log(`Username is ${anyObj.name} and price is ${anyObj.price}`);
}
handleObj(user)  // Username is Sam and price is 399

handleObj({
    name : "Krishan",
    price : 2999
})                 // Username is Krishan and price is 2999

const myNewArr = [200,300, 500,3000]
function returnSecondVal(getArr){
    return getArr[1]
}
console.log(returnSecondVal(myNewArr))    // 300
console.log(returnSecondVal([200,300, 500,3000]))   //300
