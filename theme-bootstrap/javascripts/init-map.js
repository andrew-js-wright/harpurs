function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(55.1357843, -6.6521336),
    zoom: 8
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);
