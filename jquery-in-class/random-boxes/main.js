$(function() {
  // Your interactions go here


 $(".button").click(function(){
  var thing = Math.floor((Math.random()*4)+1);
  $('.boxes').children().removeClass('color');
   $('.boxes').children().eq(thing).addClass('color');
}); 
}); 