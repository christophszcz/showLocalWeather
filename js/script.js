$(document).ready(function() {
 
  $.getJSON('http://ip-api.com/json/', function(data) {  //I.P address API
    //console.log(JSON.stringify(data, null, 2));
    current_location =  "<p>" + data.city + " , " + data.country + "</p>";
    city_name = data.city
    $('.current-location').html(current_location);
    apiKeyString = "&appid=8301741adabddef5ba1d50b386f29c9d";
    units = 'metric';
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city_name + "&units=" + units + apiKeyString, function(json) { //Weather API
      
      //$('body').html("http://api.openweathermap.org/data/2.5/weather?q=" + city_name + "&units=" + units + apiKeyString);
      
      description = "<p class='description-text'>" + json.weather[0].main + "</p>";
      conditions =  "<p class='temperature'>" + Math.floor(json.main.temp) + "<span class='unit-deg'>&deg; C</span></p>";
      wind =  "<p class='wind-speed'>" +  "Wind " + Math.floor(json.wind.speed * 3.6) + " km/h</p>";

      $('#change-unit').on('click', function(){
         $('.unit-value').toggle();
         units = (units == 'metric') ? 'imperial' : 'metric'
         if (units === 'imperial') {
           var farenheit = "<p class='temperature'>" + Math.floor(json.main.temp * (9/5) + 32)  + "<span class='unit-deg'>&deg; F</span></p>";
           $('.conditions').html(farenheit);
         } else if (units === 'metric') {
           var celsius = "<p class='temperature'>" + Math.floor(json.main.temp) + "<span class='unit-deg'>&deg; C</span></p>";
           $('.conditions').html(celsius);
         }
      });

      $('.conditions').html(conditions);
      $('.wind').html(wind);
      $('.description').html(description);
      $('#weather-symbol').attr('src', "images/" + json.weather[0].main + ".png")
    }); 
  });

});