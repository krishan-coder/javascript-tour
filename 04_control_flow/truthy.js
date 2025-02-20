// truthy and falsy value

const email = "krish@n.ai"
if(email){
    console.log("Got the email");
}else{
    console.log("Email required")
}

// ### falsey value-> false,0,-0,BigInt(0n), "", null, undefined,NaN

// ### truthy value-> [], true, "0", 'false', "false", " ", {}, 
//                      function(){} (empty func)
const em = []
if(em.length === 0){
    console.log("empty ") // executed
}
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Empty object") // executed
}



console.log(false == 0)  // true
console.log(false == '')  // true
console.log('' == 0)  // true


//  Nullish Coalescing Operator(??) : null undefined
let val1;
val1 = 5 ?? 10
console.log(val1)  // 5

val2 = null ?? 10
console.log(val2)  // 10

val3 = undefined ?? 15
console.log(val3)  // 15


// ##### Ternary opeartor
// condition ? true : false

const coffePrice = 100
coffePrice >= 80 ? console.log("more than 80") : console.log("less than 80")
// more than 80