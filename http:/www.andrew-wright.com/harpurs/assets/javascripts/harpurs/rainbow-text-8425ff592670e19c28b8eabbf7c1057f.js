(function( $ ) {
 
  $.fn.rainbowize = function() {
    return this.each(function() {
      var rainbowtext = '';
      var letter_count = 0;
      var index = 0;
 
      // get the current text inside element
      var text = $(this).text();
 
      var colourArray = [
        "#31428E", //navy
        "#FC0D1B", //red
        "#94CE58", //green
        "#1EB1ED", //blue
        "#FC0D1B"]; //red

      // hue is 360 degrees
      if (text.length > 0)
        step = 360 / (text.length);
 
      // iterate the whole 360 degrees
      for (var i = 0; i < text.length; i++)
      {
        index = letter_count%colourArray.length;
        rainbowtext = rainbowtext + '<span style="color:' + colourArray[index] + '">' + text.charAt(i) + '</span>';
        if(text.charAt(i)==' ') {
            letter_count = 0;
        } else {
          letter_count ++;
        }
      }
 
      $(this).html(rainbowtext);
    });
  };
})( jQuery );

$(document).ready(function() {
       $(".rainbow").rainbowize();
});