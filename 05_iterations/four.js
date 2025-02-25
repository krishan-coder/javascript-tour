const myObj = {
    js:'javascript',
    cpp: "C++",
    rb: "ruby",
    swift: "Swift by apple"
}

for (const key in myObj) {
    console.log(myObj[key]);   //javascript
    console.log(`${key} shortcut is for ${myObj[key]}`);
    //js shortcut is for javascript
}


const progr = ['javascript',"C++","ruby","swift"]
for (const key in progr) {
    console.log(key); // print the index (as they are the key )
}