$(document).ready(function() {

  // var units = 'metric';
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {

      units = 'metric';
      $.getJSON("http://api.openweathermap.org/data/2.5/find?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&cnt=10&units=" + units + "&appid=8301741adabddef5ba1d50b386f29c9d", function(data) {
        
        //$('body').html("http://api.openweathermap.org/data/2.5/find?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&cnt=10&unit=metric&appid=8301741adabddef5ba1d50b386f29c9d");
        $.each( data, function( key, val ) {
          current_location =  "<p>" + data.list[0].name + "</p>";
          conditions =  "<p>" + data.list[0].main.temp + "&deg; C</p>";
          wind =  "<p>" +  data.list[0].wind.speed + " meter/sec</p>"
        });

        $('#change-unit').on('click', function(){
          $('.unit-value').toggle();
          units = (units == 'metric') ? 'imperial' : 'metric';

          if (units === 'imperial') {
            var farenheit = "<p>" + (data.list[0].main.temp * (9/5) + 32)  + "&deg; C</p>";
            $('.conditions').html(farenheit);
          } 
        });

        $('.current-location').html(current_location);
        $('.conditions').html(conditions);
        $('.wind').html(wind);
 
      }); 
    });
  }
});