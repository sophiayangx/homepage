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

var shown = true
setInterval(function() {
  if (shown) {
    $(".blinking").css({"visibility": "hidden"});
    shown = false;
  } else {
    $(".blinking").css({"visibility": "visible"});
    shown = true;
  }
}, 800)
