$(document).ready(function(){
	$.getJSON("http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=8301741adabddef5ba1d50b386f29c9d", function(json) {
	  $(".container").html(JSON.stringify(json));
	});
});