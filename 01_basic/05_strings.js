const name = "krishan"
const age = 21
console.log(name+" "+age+"years");

console.log(`Hello there my self ${name} and my age is ${age}`);

const game = new String("Free fire")
console.log(game[0]); // F
console.log(game.__proto__); // {}


console.log(game.length); // 9

console.log(game.toUpperCase());  //FREE FIRE
console.log(game.charAt(3));  // e
// indexOf() gives the index of the char
// string.substring(s,e) give the substring (no -ve parameters )

const str = "coupling-things"
console.log(str.slice(-15,4)); // coup
// trim removes the left and right spaces and the line terminators
// string.replace(a,b)  replaces a with the b in the string

console.log(str.includes("ing")); //true

console.log("Hey there i am here!".split(" "));  // [ 'Hey', 'there', 'i', 'am', 'here!' ]

console.log(str.bold()); // <b>coupling-things</b>






