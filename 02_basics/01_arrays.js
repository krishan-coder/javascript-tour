// Array -- datatype that store multiple items in single varibale
// js array are resizable no fix size


const myArr = [0,1,2,3,4,5,6]
console.log(myArr[2]);
const myArr1 = new Array(2,3,4,5)
const myArr2 = [0,1,2,3,4,5,6,"krishan", true] 


// Array methods

myArr.push(7)
console.log(myArr); /* [
                    0, 1, 2, 3,
                    4, 5, 6, 7
                    ]*/

myArr.pop()
console.log(myArr);  /*[
                    0, 1, 2, 3,
                    4, 5, 6
                        ]*/


myArr.unshift(9)  // add to start of the array
console.log(myArr);
/*[
    0, 0, 1, 2,
    3, 4, 5, 6
    ]*/
   
myArr.shift()
console.log(myArr);
/*[
  0, 1, 2, 3,
  4, 5, 6
]*/

console.log(myArr.includes(9)) // false
console.log(myArr.indexOf(9)) // -1
console.log(myArr.indexOf(4)) // 4

const newArr1 = myArr.join() // by default is joins by using ","
const newArr = myArr.join("-")  
console.log(newArr); //0-1-2-3-4-5-6
console.log(typeof newArr);  // string


// slice , splice

console.log("A ", myArr)
/*A  [
  0, 1, 2, 3,
  4, 5, 6
]*/
// make temporary removal or cutting of the ele
const myn1 = myArr.slice(1,3)
console.log(myn1) // [ 1, 2 ]

console.log("B ", myArr)
/*B  [
  0, 1, 2, 3,
  4, 5, 6
]*/


 // ############################ splice  ###########

 // make permanent removal or cutting of the ele
const myn2 = myArr.splice(1,3)
console.log(myn2) // [ 1, 2, 3 ]
console.log("C ", myArr)  // C  [ 0, 4, 5, 6 ]
/*C  [
  0, 1, 2, 3,
  4, 5, 6
]*/





