$(document).ready(function() {
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $.getJSON("http://api.openweathermap.org/data/2.5/find?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&cnt=10&appid=8301741adabddef5ba1d50b386f29c9d", function(data) {
        // var items = [];
        $.each( data, function( key, val ) {
          current_location =  "<p>" +  data.name + "</p>";
          conditions =  "<p>" + data.main.temp + "</p>";
          wind =  "<p>" +  data.wind.speed + " meter/sec</p>";
        });

        $('.current-location').html(current_location);
        $('.conditions').html(conditions);
        $('.wind').html(wind);
      }); 
    });
  }  
});

