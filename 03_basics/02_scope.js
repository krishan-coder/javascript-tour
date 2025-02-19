// Scope tutorial

let a = 10
const b = 20
var c = 30

if(true){
    let a = 1   // local scope
    const b = 2  // local scope
    var c = 3  // this has global scope
}

console.log(a);  // 10
console.log(b);  // 20
console.log(c);  // 30  3

function one(){
    const userN = "Pawan"
    function two(){
        const website = "youtube"
        console.log(userN)
    }
    // console.log(website)  // error
    two()  // Pawan
}
one() 


// $$$$$$$$$$$$$$$$$$$$$$$ Intresting #########################


console.log(addone(5))  //6
function addone(num){
    return num +1;
}



// console.log(addtwo(5))  error
const addtwo = function(num){
    return num+2
}
