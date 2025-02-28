const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");
const resetButton = document.getElementById("white");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function(event){
    console.log(event)
    console.log(event.target)
    switch(event.target.id){
      case 'grey' :
        body.style.backgroundColor = event.target.id;
        break;
  
      case "green" :
        body.style.backgroundColor = event.target.id;
        break;
  
      case "blue":
        body.style.backgroundColor = event.target.id;
        break;
  
      case "yellow":
        body.style.backgroundColor = event.target.id;
        break;
  
      case "purple":
        body.style.backgroundColor = event.target.id;
        break;
  
    }
  })
} );

resetButton.addEventListener('click',function(event){
  body.style.backgroundColor = "white";
});

