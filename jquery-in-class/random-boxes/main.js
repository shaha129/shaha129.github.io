$(function() {
  // Your interactions go here


 $(".button").click(function(){
  var i = Math.floor((Math.random()*4)+1);
  $('.boxes').children().removeClass('color');
   $('.boxes').children().eq(i).addClass('color');
}); 
});