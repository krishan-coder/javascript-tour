// const code = ["js","rb", "py"]
// const vals = code.forEach(item => {
//     console.log(item);
//     return item;
// })
// console.log(vals);  // undefined (as forEach loop do not return any value)

const nums = [1,2,3,4,5,6,7,8,9,10]
// const num = nums.filter((n) => {
//     return n>5;          // explecitly return
// })
// console.log(num);  // [ 6, 7, 8, 9, 10 ]

// meth 2
const num = nums.filter((n) => n>5)   // implicitly return
console.log(num);   // [ 6, 7, 8, 9, 10 ]


// using forEach loop with logic of the same above 
const newNum = []
nums.forEach((item) => {
    if(item>5){
        newNum.push(item);
    }
})
console.log(newNum);    // [ 6, 7, 8, 9, 10 ]
