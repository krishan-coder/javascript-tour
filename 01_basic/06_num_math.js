const score = 400
console.log(score); //400
console.log(typeof score); // number


const num = new Number(400)
console.log(num);  // [Number: 400]
console.log(typeof num); // object

console.log(num.toString());
console.log(num.toFixed(2)); //400.00

const otherNum = 34.4353
console.log(otherNum.toPrecision(3)) // 34.4

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // 1,000,000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 (indian)


// ########################  Maths ##################################

console.log(Math); // Object [Math] {}
console.log(Math.abs(-4)); // 4 gives absoulute value i.e. it +ve no

console.log(Math.round(4.6)) // 5
console.log(Math.ceil(4.6)); //5
console.log(Math.floor(4.6)); // 4
// Math.max()  Math.min()

console.log(Math.random()); // random value b/w 0 and 1 -> 0.1295986130352362
console.log(Math.random()*10); // random value b/w 0 and 10 -> 5.390268861286225
console.log((Math.random()*10) + 1); // random value b/w 1 and 10

const min = 10
const max = 30
console.log(Math.floor(Math.random()*(max - min +1))+min) // value b/w 10 to 30




