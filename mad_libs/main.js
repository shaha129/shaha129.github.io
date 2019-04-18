$(function(){
	$.get('https://shaha129.github.io/api.json', function(data) {
		console.log(data);
		var adjective1 = data.adjective1;

		$('.word-adjective-1').html(adjective1);

	}).fail(function() {
		console.log('Error in GET request. Handle the error gracefully.');
	});

});	

