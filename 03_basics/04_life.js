// Immediately Invoked Function Expressions (IIFE)

function chai(){
    console.log("DB connected");
    
}
chai()   //DB connected

// name iife
(function chai(){ // to remove the pollution of the global scope we use IIFE
    console.log("DB connected again");
    
})(); //DB connected again (there must be a terminator to stop the function)


((name) => {    // simple iife 
    console.log(`Hellow${name}`)
})("Krishan");

//  to write two IIFE in single code we have to use the terminator after each function
