const conversion = document.getElementById('conversion');

conversion.addEventListener('convert', function(e){
  e.preventDefault();
  const miles_km = document.querySelector('#miles-km');
  const km_miles = document.querySelector('#km-miles');
  const value_input = document.querySelector('#value-input');
  const results = document.getElementById('results')

  if(value_input === "" || value_input<0 || isNaN(value_input)){
    results.innerHTML = "Please Enter Valid Input"
  }
  else if (){

  }
  
})