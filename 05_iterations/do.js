// while loop

// while(condition){
//     // statements
// }
let i = 1;
while(i<=4){
    console.log(`Value is ${i}`)
    ++i;
}
// // output
// Value is 1
// Value is 2
// Value is 3
// Value is 4

let myarr = ['flash', 'batman', "superman"]
let arr = 0;
while(arr < myarr.length){
    console.log(`Value is ${myarr[arr]}`);
    ++arr;
}
// output
// Value is flash
// Value is batman
// Value is superman

let score = 2;
do{
    console.log(`Score is ${score}`)
    ++score;
}while(score<5);
// this loop with execute one time always
// output->
// Score is 2
// Score is 3
// Score is 4
