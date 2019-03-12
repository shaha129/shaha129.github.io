$(function() {
  // Your interactions go here

	$(document).on('keypress', function(e) {
	  var key = e.key;
	  var img;
	  var text;

	  console.log('keypress:', key);

	  if ( key == 'a' ) {
	    img = 'aladdin.png';
	  } else if ( key == 'b' ) {
	    img = 'bugs_Bunny.svg.png';
	  } else if ( key == 'c' ) {
	    img = '220px-Cruella_de_Vil.gif';
	  }  else if ( key == 'd' ) {
	    img = '1200px-Daffy_Duck.svg.png';
	  }

	  // etc.

	  if ( img ) {
	    $('body').append('<img src="' + img + '" style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); max-width: 300px;">');
	  } else {
	    $('body').append('<h2 style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); font-size: ' + Math.random() * 200 + 'px;">' + key + '</h2>');
	  }
	});

	$.getScript('cat-meowing.mp3', function() {
  	console.log('cat-meowing.mp3 is loaded');
	});

	$(document).on('keypress', function(e) {
  	var key = e.key;
  	var synth = new Tone.Synth().toMaster();

  	console.log('keypress:', key);

 	 if ( key > 0 && key < 10 ) {
    synth.triggerAttackRelease(('C' + key), '8n');
  }

  // etc.
});

});