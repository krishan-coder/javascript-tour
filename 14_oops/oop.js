const user = {
    username: "krishan",
    loginCount: 4,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got values");
        // console.log(username)  // this give error 
        console.log(this.username) // krishan
        console.log(this); // print user (the object )
    }
}
console.log(user.signedIn);


// new keyword is constructor function (using one obj literal we can make many instances())
const promise1 = new Promise();

function User (userN, logcount, isLogg){
    this.userN = userN;
    this.logcount = logcount;
    this.isLogg = isLogg;
    
    return this;
}
const userOne = User("krishan", 4, true);
const userTwo = User("chai", 5, false);  // this will override the values of userOne
console.log(userOne);

// so to stop the overriding we use "new" keyword
const uOne = new User("krishan", 4, true);
const uTwo = new User("chai", 5, false);  // this will not override the values of userOne
console.log(userOne);