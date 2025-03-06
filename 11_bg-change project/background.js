
// function generate random colors  
const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0;i<6;i++){
        color += hex.charAt(Math.floor(Math.random()*16));
    }
    return color;
};
let intervalId;
// function called to change the color
const startChangeColor = function(){
    // if intervalId is not null then setInterval for it (reduce overlapping of intervalId)
    if(!intervalId)
        intervalId = setInterval(changeColor,1000);
    // function that change the color
    function changeColor(){
        document.body.style.backgroundColor = randomColor();
    }
};
// function called that stop the changing of the color
const stopChangeColor = function(){
    // clears the interval to stop changing color
    clearInterval(intervalId);
    // to stop color changing in edge cases(stop running of multiple intervals in any case)
    intervalId = null;
};

// events created to start changing color
document.querySelector('#start').addEventListener('click',startChangeColor);

// events created to stop changing color
document.querySelector('#stop').addEventListener('click',stopChangeColor);
