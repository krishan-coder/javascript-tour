const coding = ["js", "ruby", "java","cpp","python"]

// this is call back function
coding.forEach(function(element){});

coding.forEach(element => {
    console.log(element); // print value    
});

// call back function doesn't have function name 


// method 2
function printMe(item){
    console.log(item);
}
coding.forEach(printMe);


// other paremeters of the forEach loop
coding.forEach((item,index,arr) =>{
    console.log(item,index,arr);
    
});


const myCoding = [
    {
        languageName: "javaScript",
        languageFileName : "js"
    },
    {
        languageName: "java",
        languageFileName : "java"
    },
    {
        languageName: "python",
        languageFileName : "py"
    }
]

myCoding.forEach((item, index, arr) => {
    console.log(item.languageName);
    // console.log(item,index,arr);
});
