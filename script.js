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

//commentboard
var commentInput = $("#comment-input")
var commentDisplay = $("#comment-display")
var commentClear = $("#comment-clear")
var commentSubmit = $("#comment-submit")

commentInput.keydown(function(e) {
  if (e.keyCode == "13") {
    addListItem("comments", commentInput.val());
  }
})

commentSubmit.click(function() {
  addListItem("comments", commentInput.val());
})


onNewListItem("comments", function(newComment) {
  commentDisplay.append("<div>" + newComment + "</div>")
})


commentClear.click(function(){
  commentDisplay.html("")
  deleteValue("comments")
});

commentInput.click(function(e){
  e.preventDefault();
});

commentClear.click(function(e){
  e.preventDefault();
});

commentSubmit.click(function(e){
  e.preventDefault();
});

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

//hack the editor
var button = $("#hackbutton")

button.click(function(){
  var webpage = $(parent.document.body)
  webpage.find("div").css({border:"1px solid yellow"})

  var block = $(parent.parent.document.body).find("#b5")
  block.find("pre").append("<button class='btn btn-primary' id='hi'>" + "hi" + "</button>");
});

$("#hackbutton").click(function(e){
  e.preventDefault();
});

//politics
var buttonPolitics = $("#button-politics")
var list = $("#list-display")
var buttonRemove = $("#button-remove")

buttonPolitics.click(function(){
  var items = ["Daniel", "Lamar", "Wayne", "George", "Max", "Evan", "Robert", "Joseph", "Jeff", "Christopher", "Barbara", "John", "Samuel", "Jim", "Conrad", "Robert", "Ben", "Maria", "Thomas", "Lincoln", "Saxby", "Hillary", "Thad", "Norm", "Susan", "Kent", "John", "Jon", "Larry", "Michael", "Thomas", "Mark", "Michael", "Christopher", "Elizabeth", "Pete", "Byron", "Richard", "John", "John", "Michael", "Russell", "Dianne","Peter", "William", "Bob", "Lindsey", "Charles", "Judd", "Charles", "Thomas", "Orrin", "Ernest", "Kay", "James", "Daniel", "James", "Tim", "Edward", "John", "Herbert", "Jon", "Mary", "Frank", "Patrick", "Carl", "Joseph", "Blanche", "Trent","Richard", "John", "Mitch", "Barbara", "Zell", "Lisa", "Patty", "Ben", "Bill", "Don", "Mark", "John", "Harry",
               "Pat", "John", "Richard", "Paul", "Charles", "Jefferson", "Richard", "Gordon", "Olympia", "Arlen",
               "Debbie", "Ted", "John", "James", "Craig", "George", "John", "Ron"];
  //i couldn't get it to pick a random name from the api so I bashed it all out

  var item = items[Math.floor(Math.random() * 100)]
  list.append("<div>" + item + "</div>")
});

buttonRemove.click(function(){
  list.html("")
});

buttonPolitics.click(function(e){
  e.preventDefault();
});

buttonRemove.click(function(e){
  e.preventDefault();
});

//turtle part 1
$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode === 13) {
    goForward(80);
    turnRight();
  }
})

$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode === 32) {
    function sides(n) {
      for (i = 0; i < n; i++) {
        goForward(100)
        turnLeftStar(n);
      }
    }
    sides(10)
  }
})

//turtle part 2

$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode === 39) {
    goForward(100);
  }
})

$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode === 38) {
    goUp(100)
  }
})

$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode === 37) {
    goBackwards(100);
  }
})

$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode === 40) {
    goDown(100);
  }
})
