// console.log(2>1);
// console.log(2>=1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2" > 1);  // true
// console.log("02" > 1); // true

// comparision operator convert the null to 0,but "==" it does not 
// console.log(null >0); //false
// console.log(null ==0); // false
// console.log(null >=0); // true  comparision convert null to zero(0);

// console.log(undefined > 0); //false
// console.log(undefined ==0); // false
// console.log(undefined >=0); // false  

// === Strict check

console.log("2" === 2); // false
console.log(true === 1); // false

// there must be no comparision between the different data types.

console.log(undefined == null) // true
console.log(undefined === null) // false