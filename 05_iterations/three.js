// for of loop
//[{}, {}, {}]
const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greeting = "Hello Coders"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}

// Map

const map = new Map();
map.set('IN',"India");
map.set('US',"United States of America");
map.set('FR',"France");
map.set('FR',"France"); // no change (Store unique key-value pairs)
console.log(map);
// Map(3) {
//     'IN' => 'India',
//     'US' => 'United States of America',
//     'FR' => 'France'
//   }

for (const key of map) {
    console.log(key);  
}
// [ 'IN', 'India' ]
// [ 'US', 'United States of America' ]
// [ 'FR', 'France' ]

for (const [key,value] of map) {
    console.log(key, ':-', value);  
}
// IN :- India
// US :- United States of America
// FR :- France


const obj = {
    'g1': "NFS",
    'g2': "VALORANT"
}
for (const [key,value] of obj) {
    console.log(key, ':-', value);  
}// error obj not iterable 

