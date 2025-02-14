// Dates

let date = new Date();
console.log(date) //2025-02-14T16:37:38.605Z
console.log(date.toString()) // Fri Feb 14 2025 16:38:09 GMT+0000 (Coordinated Universal Time)
console.log(date.toDateString()) // Fri Feb 14 2025
console.log(date.toLocaleDateString()) // 2/14/2025
console.log(typeof date) // object

// let myDate = new Date(2025,2,29) //3/29/2025, 12:00:00 AM
// let myDate = new Date(2025,2,29,5,3) // 3/29/2025, 5:03:00 AM
// let myDate = new Date("2025-3-29")  // 3/29/2025, 12:00:00 AM
let myDate = new Date("03-29-2025")   //  3/29/2025, 12:00:00 AM
console.log(myDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);   // 1739551650297 ms
console.log(myDate.getTime());  //1743206400000 ms

console.log(Date.now()/1000) // 1739551817.75 sec


let newDate = new Date()
console.log(newDate.getDay()); //5
console.log(newDate.getMonth() +1); //2

let weekday = newDate.toLocaleString('default', {
    weekday : "long"
})
console.log(weekday)  //Friday





