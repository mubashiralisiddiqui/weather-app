// $(document).ready(function(){
  
// });


 

$(document).ready(function(){

var long;
var lat
 
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
      long= position.coords.longitude;
      lat= position.coords.latitude;
var api ="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=706c98e16b130eabf49b446c3f914323&units=metric";
      $.getJSON( api, function( data ) {
     var weathertype =data.weather[0].description;
     var windspeed = data.wind.speed;
     var city = data.name;
     var temprature=data.main.temp;
     var humidity = data.main.humidity;
     

    $("#data").html("latitude: " + lat + "<br>longitude: " +long);

    $("#location").html(city);
      $("#temprature").html(temprature);
      $("#humidity").html(humidity);
      $("#windspeed").html(windspeed);
      $("#direction").html(direction);
    console.log(city);
    console.log(api)
  });


      });


  
}


  
  
});

 
   