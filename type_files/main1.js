
    function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
} 


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


 $( function() {

    $('.pic').mouseover(function() {
       $(this).siblings('.pic').css('z-index', 10);
       $(this).css('z-index', 11);
    });
    

    var $draggable = $('.pic').draggabilly();

    $( ".p1" ).click(function(){
        $(".pic1").toggle();
    });

     $( ".p2" ).click(function(){
        $(".pic2").toggle();
    });

     $( ".p3" ).click(function(){
      $(".pic3").toggle();
    });

     $( ".p4" ).click(function(){
      $(".pic4").toggle();
    });

     $( ".p5" ).click(function(){
      $(".pic5").toggle();
    });

     $( ".p6" ).click(function(){
      $(".pic6").toggle();
    });

     $( ".p7" ).click(function(){
      $(".pic7").toggle();
    });

     $( ".p8" ).click(function(){
      $(".pic8").toggle();
    });

     $( ".p9" ).click(function(){
      $(".pic9").toggle();
    });

     $( ".p10" ).click(function(){
      $(".pic10").toggle();
    });

     $( ".p11" ).click(function(){
      $(".pic11").toggle();
    });
     
     $( ".p12" ).click(function(){
      $(".pic12").toggle();
    });


  

  
  //    $(".p14").one("click", function() {
		// $('.images14').append('<div class="pic pic2"> <img  src="assets/15.gif"> </div>').draggable();
  //   });

 
 });

     