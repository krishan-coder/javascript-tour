// for

for(let ind = 0; ind <= 7; ind++){
    if( ind == 5){
        console.log("5 is best number")
    }else
    console.log(ind);
}
console.log("The next nested for loop")
for(let i=0;i<2;i++){
    for(let j = 0;j<2;j++){
        console.log(`Inner loop: ${j}`);
    }
    console.log(`Outer loop: ${i}`);
}

console.log("Array of string")
let myArr = ["krishna", "rama", "shiva", "devendra", "girish"]
for(let ind = 0;ind<myArr.length;ind++){
    console.log(myArr[ind]);
}


// break and continue

for(let i=1;i<=10;i++){
    // it will skip the even no's
    if(i%2== 0){ 
        console.log("Even detected")
        continue;
    }
    // stop the loop when 9 is found
    if(i == 9){
        console.log("No: 9 is found")
        break;
    }
    console.log(i);
}
// output 
/*1
Even detected
3
Even detected
5
Even detected
7
Even detected
No: 9 is found*/
