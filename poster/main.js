$(function() {
	$(window).mouseover(function(e) {
		var x = e.clientX;
		var y = e.clientY;

		console.log(x, y);
	});
});