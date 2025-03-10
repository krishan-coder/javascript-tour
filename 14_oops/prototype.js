let myName = "krishan    "
console.log(myName.length);



let myHero = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }

}

// adding new properties to Object then it will be used or added to all 
Object.prototype.krishan = function(){
    console.log("Krishan is present in all Objects");
}
heroPower.krishan();

myHero.krishan();

Array.prototype.hello = function(){
    console.log("Say hello ");
}
myHero.hello();
// heroPower.hello();  // if new property add to array,string etc will not be added to Objects



const user = {
    name : "pawan",
    email: "abc@gmail.com"
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport ={
    isAvailable: false
}
const TASupport ={
    makeAssignment : "JS Assignment",
    fullTime : true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = user



// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)  // prototype inheritance
// TeachingSupport will inherit the properties of the teacher




let anotherName = "Krishan    "
String.prototype.trueLength = function(){
    console.log(`${this.anotherName}`) // undefined because 'this' refers 
    // to (new String("Krishan   "))
    console.log(`${this}`)  // Krishan
    console.log(`True length is: ${this.trim().length}`);  // 7
    
}
console.log(anotherName.length);
anotherName.trueLength();

"hibers".trueLength();