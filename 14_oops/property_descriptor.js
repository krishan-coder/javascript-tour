console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI); // cannot be changed (universal constant )


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI" );
console.log(descriptor);
// o/p {     
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   } 


const obj = Object.create(null) // factory function

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable : true,
    
    orderChai: function(){
        console.log("chai nahi bani(code fat gaya)");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai));    // undefined
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
//o/p-->
// {
    //     value: 'ginger chai',
    //     writable: true,
    //     enumerable: true,
    //     configurable: true
    //   }
    
    Object.defineProperty(chai,"name",{
        // writable:false,
        enumerable: false
    })
    
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// {
//     value: 'ginger chai',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }


for (let [key,value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`);
}
// as use of enumerable : false the name cannot be iterable as it is passed in the parameter to be stopped for the iteration
// when we do the enumerable : true then we can iterate over the name also (since passed in parameter)