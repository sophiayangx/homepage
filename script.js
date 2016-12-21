$('#button').click(function(){
  $('html,body').animate({
    scrollTop: $('.wrapper-projtitle').offset().top},
                         'slow');
});

$('#carrot').click(function(){
  $('html,body').animate({
    scrollTop: $('.wrapper-projects').offset().top},
                         'slow');
});

//text effects
var shown = true
setInterval(function() {
  if (shown) {
    $("#blinking").css({"visibility": "hidden"});
    shown = false;
  } else {
    $("#blinking").css({"visibility": "visible"});
    shown = true;
  }
}, 800)

//deal with it
$('#animateblock').hover(function() {
  $(this).animate({
    left: '195px'
  });
});

$('#animateblock').mouseleave(function() {
  $(this).animate({
    left: '15px'
  });
});

// copy element
var elementsList = $("#bcon4");
var element = $(".copyblock");

var colors = ["#e57b7b", "#efbe9b", "#f9fcb8", "#bdfcb8", "#91add6", "#aa91d6", "#ddafd9"];

colors.forEach(function (color) {
  $(elementsList).append(element.clone().css("background-color", color))
});
