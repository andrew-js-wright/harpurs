(function( $ ) {
 
  $.fn.rainbowize = function() {
    return this.each(function() {
      var rainbowtext = '';
      var index = 0;
 
      // get the current text inside element
      var text = $(this).text();
 
      var colourArray = ["#31428E","#FC0D1B", "#94CE58", "#1EB1ED", "#FC0D1B"];

      // hue is 360 degrees
      if (text.length > 0)
        step = 360 / (text.length);
 
      // iterate the whole 360 degrees
      for (var i = 0; i < text.length; i++)
      {
        index = i%colourArray.length;
        rainbowtext = rainbowtext + '<span style="color:' + colourArray[index] + '">' + text.charAt(i) + '</span>';
      }
 
      $(this).html(rainbowtext);
    });
  };
})( jQuery );

$(document).ready(function() {
       $(".rainbow").rainbowize();
});