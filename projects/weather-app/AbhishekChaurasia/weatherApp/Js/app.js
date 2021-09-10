

const loc = document.getElementById('locationname')
const temperature = document.getElementById('temp')
const summary = document.querySelector("#summary");
const icon = document.querySelector("#icon");
const sunriset = document.querySelector("#sunriseDOM");
const sunset = document.querySelector("#sunsetDOM");


function onGeolocateSuccess(coordinates) {
    
  let lon = coordinates.coords.longitude;
  let lat = coordinates.coords.latitude;
  console.log(lon,lat);
  
  const base = await fetch(`https://api.weatherapi.com/v1/current.json?key=393bd818b1e747a590171134211009&q=${lat},${lon}`);

  // const obj = await base.json()
  
  // console.log(obj);
}

function onGeolocateError(error) {
  console.warn(error.code, error.message);
 
  if (error.code === 1) {
    
  } else if (error.code === 2) {
    
  } else if (error.code === 3) {
    
  }
}

window.addEventListener('click', function() {
    navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
});


