$(function() {
  // Your interactions go here

var blade = $('.blade');
var win= $(window);
var documentHeight = $(document).height();
var windowHeight = $(window).height();

$(window).on('scroll', function() {
  var scrollTop = $(win).scrollTop();

  if ( scrollTop + windowHeight >= documentHeight ) {
    blade.css ('transform', 'rotate('+ top +' deg)');
  }
});

});