$(function(){

	var endpoints = [

    "https://kquea402.github.io/api.json",
    "https://glics998.github.io/api.json",
    "https://colindharrington.github.io/api.json",
    "https://hoant626.github.io/api.json",
    "https://karla772.github.io/api.json",
    "https://leeh779.github.io/api.json",
    "https://lis874.github.io/api.json",
    "https://phoebechloee.github.io/api.json",
    "https://luw779.github.io/api.json",
    "https://mullg389.github.io/api.json",
    "https://pana005.github.io/api.json",
    "https://raos130.github.io/api.json",
    "https://samsj948.github.io/api.json",
    "https://shaha129.github.io/api.json",
    "https://Mwedd9.github.io/api.json",
    "https://zhenx804.github.io/api.json"

];

$('.button').click(function(){
	console.log($(this));
	var url= $(this).data('url');
	console.log(url);

	$.get(url, function(data) {
		console.log(data);

		$('.word-adjective-1').html(data.adjective1);
		$('.art-supply').html(data.artSupply);

	
	}).fail(function(error) {
		console.log('Error in GET request. Handle the error gracefully.');
		console.warn(error.statusText);
	});
});	


	$('.randomizer').click(function(){
		var randomEndpoint = endpoints[Math.floor(Math.random()*endpoints.length)]
		console.log(randomEndpoint);

		$.get(randomEndpoint, function(data){
		console.log(data);

		$('.word-adjective-1').html(data.adjective1);
		$('.art-supply').html(data.artSupply);
		$('.computer-software').html(data.computerSoftware);
		$('.celebrityName').html(data.celebrityName);
		$('.websiteName').html(data.websiteName);
		$('.foods').html(data.foods.join(', '));

		$('html').css({background:'', color: ''});
	}).fail(function(error){
	 $('html').css({background: '#F67280', color:'#F67280'});
	});
});
});			





