	$(function() {
		console.log('hello');

		var url = 'https://api.openweathermap.org/data/2.5/weather?zip=53700,pk&appid=303c32d427d49336c7e146332327f1a4';

		$.get(url, function(data) {
			// The get request fires a callback function when the API request finishes
			console.log(data);
			// The data object contains all the information returned in the API
			var weather = data.weather[0];
			var wind = data.wind;
			console.log(weather.icon);
			
			var pressure = data.main.pressure;
			console.log(pressure);

			var wind = data.wind.speed;
			console.log(wind);	

			var humidity = data.main.humidity;
			console.log(humidity);			
		

			if (pressure > 1000) {


				$( '#pressure' ).animate({
					opacity: 0.25,
					fontSize: '12px'
				},
				300,
				function() {
	    // executes when the animation is done
		}
		);

			}

			else{
				$('body').append('<div id="pressure"></div>');
			}

		});


	});

	$(function() {
	

			if (humidity > 70) {


				$( '#humidity' ).animate({
					height: 'toggle',

				},
				300,
				function() {
	    // executes when the animation is done
		}
		);

			}

			else{
				$('body').append('<div id="humidity2"></div>');
			}

		});



	function myMove() {
		var elem = document.getElementById("animate");   
		var pos = 0;
		var id = setInterval(frame, 5);
		function frame() {
			if (wind === 2.6) {
				clearInterval(id);
			} else {
				pos++; 
				elem.style.top = pos + "px"; 
				elem.style.left = pos + "px"; 
			}
		}
	}




