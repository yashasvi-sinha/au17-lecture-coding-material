

const loc = document.getElementById('locationname')
const summary = document.querySelector("#summary");
const icons = document.querySelector("#w-icon");
const humidity = document.querySelector("#humidity-c");
const wind = document.querySelector("#windDOM");
const uv = document.querySelector("#uvDOM");
const fahar = document.querySelector('#Fahar')
const temperature = document.getElementById('temp')


async function onGeolocateSuccess(coordinates) {
    
  let lon = coordinates.coords.longitude;
  let lat = coordinates.coords.latitude;
  console.log(lon,lat);
  
  const base = await fetch(`https://api.weatherapi.com/v1/current.json?key=393bd818b1e747a590171134211009&q=${lat},${lon}`);

  const obj = await base.json()
  
  console.log(obj);

  temperature.innerText = `${obj.current.temp_c} °C`;
  loc.innerText = `${obj.location.name}`;
  // icons.innerText = `${obj.current.condition.text};
  humidity.textContent = `${obj.current.humidity} %`;
  wind.textContent = `${obj.current.wind_kph} KM`;
  uv.textContent = `${obj.current.uv} UV`;

  fahar.addEventListener('click', function(){
    temperaturef.innerHTML = `${obj.current.temp_f} °F`;
  } ) 

}

function onGeolocateError(error) {
  console.warn(error.code, error.message);
 
  if (error.code === 1) {
    
  } else if (error.code === 2) {
    
  } else if (error.code === 3) {
    
  }
}

window.addEventListener('load', function() {
    navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
});


  