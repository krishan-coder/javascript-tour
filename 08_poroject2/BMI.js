const form = document.querySelector('form');
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function(event){
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  let h = true;
  let w = true;
  if(height == '' || height<0 || isNaN(height) ){
    results.innerHTML = `Please give a valid height ${height}`;
     h = false;
  }
  if(weight == '' || weight<0 || isNaN(weight) ){
    results.innerHTML = `Please give a valid weight ${weight}`;
    w = false;
  }
  if(h && w){
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    results.innerHTML= `<p>Your BMI is ${bmi}.</p>`;
    if(bmi < 18.6){
      results.innerHTML += `<p>You are Under Weight</p>`;
    }
    else if(bmi >= 18.6 && bmi <= 24.9){
      results.innerHTML += `<p>You have Healthy Weight</p>`;
    }
    else{
      results.innerHTML += `<p>You are Over Weight</p>`;
    }
  }


})