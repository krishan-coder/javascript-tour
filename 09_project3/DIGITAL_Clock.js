// const clock = document.querySelector("#clock");
const clock = document.getElementById('clock');
const date = document.querySelector("#date");

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000);
setInterval(function(){
    let d = new Date();
    date.innerHTML = d.toLocaleDateString();
},1000);