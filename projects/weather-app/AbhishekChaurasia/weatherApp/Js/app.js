
const geolocateBtn = document.getElementById('geo-btn');
const geolocationname = document.getElementById('locationname')

function onGeolocateSuccess(coordinates) {
    
    let getloction = 'Latitude is ' + coordinates.coords.latitude + ',' + ' Longitude is ' + coordinates.coords.longitude
    geolocationname.innerHTML = getloction;
  
}

function onGeolocateError(error) {
  console.warn(error.code, error.message);
 
  if (error.code === 1) {
    
  } else if (error.code === 2) {
    
  } else if (error.code === 3) {
    
  }
}

geolocateBtn.addEventListener('click', function() {
    navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
});


