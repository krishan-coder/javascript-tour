const myNumer = [1,2,3,4,5,6,7,8,9,10]
const newNum = myNumer.map((n) => n+10);
console.log(newNum);


// chaining 
const newN = myNumer.map((n) => n*10).map((n) => n+1).filter((n) => n<60);
console.log(newN);   // [ 11, 21, 31, 41, 51 ]
