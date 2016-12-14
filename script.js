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
