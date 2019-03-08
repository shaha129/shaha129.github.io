$(function() {
  // Your interactions go here
  $(document).ready(function() {

  	$( ".seagull" ).click(function() {
	  $( ".seagull" ).animate({
	    marginLeft: "7in"
	  }, 1500, function() {
	  	console.log('i flew');
	  });

	});

  });

});

