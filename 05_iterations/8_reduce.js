// ###############  reduce function ###########

//   Syntax :--
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );


const arr = [1,2,3,4,5]
const initialVal = 0;

// const s1 = arr.reduce(function(accumulator,currentValue){
//     console.log(`acc:${accumulator} and curr:${currentValue}`)
//     return accumulator + currentValue;
// },3)   // as initial value of accumulator is 3 
// console.log(s1); // 18

const sum = arr.reduce((sum,curr) => sum+curr,initialVal)
console.log(sum); // 15



const cart = [
    {
        lang : "js",
        price : 300
    },
    {
        lang : "AI",
        price : 1300
    },
    {
        lang : "DS",
        price : 3000
    }
]

const totalPrice = cart.reduce((acc,p) => acc+p.price, 0);
console.log(totalPrice);   // 4600



