var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    myAudio.pause()
  } else {
    myAudio.play();
  }
};
myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};



// $(document).ready(function(){
// 	$('#gallery').click(function(){
//    		$('#stop').show();
// 	});


	var count = 0;
  $('#gallery').on('click', function(event) {
    // All javascript event handlers give you information about the event type in the event argument.
    console.log(event);
    // event.preventDefault() will prevent the default click event from happening in the browser.
    // This makes it so that clicking a link doesn't actually go to that link.
    event.preventDefault();

    count++;
    $('.container').append("<img id='stop' src='stop' + count + '.gif'/>");
  });



