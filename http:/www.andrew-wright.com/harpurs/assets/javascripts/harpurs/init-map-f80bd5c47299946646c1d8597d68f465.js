function initialize() {
  lat = 55.1357843;
  lang = -6.6521336;
  var mapOptions = {
    center: new google.maps.LatLng(lat, lang),
    zoom: 13
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  var marker = new google.maps.Marker(
    {
      map: map,
      position: new google.maps.LatLng(lat, lang),
      title: "Harpurs Hill"
    }
  );
}
google.maps.event.addDomListener(window, 'load', initialize);
