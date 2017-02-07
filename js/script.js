$(document).ready(function() {

  $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=94040,us&APPID=8301741adabddef5ba1d50b386f29c9d", function(data) {
    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
 
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
  });
});

