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
