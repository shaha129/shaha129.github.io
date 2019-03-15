$(function() {
  // Your interactions go here

var blade = $('.blade');
var win= $(window);
var documentHeight = $(document).height();
var windowHeight = $(window).height();

$(window).on('scroll', function() {
  var scrollTop = $(win).scrollTop();

  if ( scrollTop + windowHeight >= documentHeight ) {
  }

  console.log('top', scrollTop);
    blade.css ('transform', 'rotate('+ scrollTop +'deg)');
});

});