$(document).ready(function() {

  // var units = ['metric'];

  $('#change-unit').on('click', function(){
    units = 'imperial';
    $('.unit-value').toggle();
  });
  
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

        if (previous && current && previous !== current) {
          console.log('refresh');
          location.reload();
        }

        $('.current-location').html(current_location);
        $('.conditions').html(conditions);
        $('.wind').html(wind);
      }); 
    });
  }  
});