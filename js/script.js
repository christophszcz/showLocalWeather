$(document).ready(function() {
 
  $.getJSON('http://ip-api.com/json/', function(data) {  //I.P address API
    //console.log(JSON.stringify(data, null, 2));
    current_location =  "<p>" + data.city + "</p>";
    city_name = data.city
    $('.current-location').html(current_location);
    apiKeyString = "&appid=8301741adabddef5ba1d50b386f29c9d";
    units = 'metric';
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city_name + "&units=" + units + apiKeyString, function(json) { //Weather API
      
      //$('body').html("http://api.openweathermap.org/data/2.5/weather?q=" + city_name + "&units=" + units + apiKeyString);
      
      description = "<p>" + json.weather[0].main + "</p>";
      conditions =  "<p>" + Math.floor(json.main.temp) + "&deg; C</p>";
      wind =  "<p>" +  Math.floor(json.wind.speed * 3.6) + " km/hr</p>";

      $('#change-unit').on('click', function(){
         $('.unit-value').toggle();
         units = (units == 'metric') ? 'imperial' : 'metric'
         if (units === 'imperial') {
           var farenheit = "<p>" + Math.floor(json.main.temp * (9/5) + 32)  + "&deg; F</p>";
           $('.conditions').html(farenheit);
         } else if (units === 'metric') {
           var celsius = "<p>" + Math.floor(json.main.temp) + "&deg; C</p>";
           $('.conditions').html(celsius);
         }
      });

      $('.conditions').html(conditions);
      $('.wind').html(wind);
      $('.description').html(description);
    }); 
  });

});