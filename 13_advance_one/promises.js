
// promise is object

const promiseOne = new Promise(function (resolve, reject)  {
    // Do an async task
    // DB calls , cryptography, network

    setTimeout(function()  {
        console.log('Async task is complete');
        resolve()       // by executing this the "Promise is consumed"
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


// Promise 2
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()   // built connection b/w promise and then function
    },1000)
}).then(function(){
    console.log("Async 2 revolved")
})


// Promise 3
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName: "Krishan", email:"krishan@.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user.email);  // krishan@.com
})


// Promise 4

const pFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;   
        // if error=false then resolve will work&promise will give output
        if(error){
            resolve({name:"Ramu", pass: "123"});
        }else{
            reject("Error occured")
        }
    },1000)
})

pFour.then(function(user){
    console.log(user)
    return user.name;
})
.then((name) => console.log(name))
.catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolver or rejected"))


/*
if the error = true then it will call the resolve func and give the output as mentioned in then()
if the error = false then, it will call the reject func and give o/p as in catch()
finally() will always run that gives the message that you want to share */

// promise 5

const p5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;   
        if(!error){
            resolve({name:"Js", pass: "123"});
        }else{
            reject("Error: Js went wrong")
        }
    },1000)
})

// without using .then() or .catch()
// it does not handle catch (errors) directly
async function consumePromise5(){
    try{
        const response = await p5;  // promise is object so no use of () to make instance
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromise5()


//?????????????????????????????????????????????????????????????????????

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()



fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
