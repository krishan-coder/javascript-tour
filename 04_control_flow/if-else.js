// if

if(true){
    // code execute
}
if(false){
    // code not execute
}

const isUserLog = true;
if(isUserLog){
    console.log("User logged in");  //executed
}else{
    console.log("User not logged in");
    
}
// condition ->  >, <, >=, <=, ==, ===, !=, !== (strictly not equal too)
if(2 == "2"){
    console.log("User logged in");  //executed
}
if(2 === "2"){ 
    console.log("User logged in");  //not executed
}

// similarly !== is used 


const bal = 1000
if(bal >500) console.log("More than min balance")  // executed

if(bal >500) console.log("More than min balance"),
console.log("balance");
// More than min balance
// balance

if(bal < 500){
    console.log("less than 500")
}
else if(bal <900){
    console.log("less than 900")
}else{
    console.log("less than 1200")  // executed
}

if(true && true){
    console.log("Both condition are true") // executed
}
if(true || false){
    console.log("Both or one of the condition is true") // executed
}

