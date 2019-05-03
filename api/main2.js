$(document).ready(function(){
	document.onmousemove = animateStars;
	function animateStars (eventp){
	var star = document.createElement("div");
	star.setAttribute("class","star");
	document.body.appendChild(star);

	star.style.left = event.clientX +'px';
	star.style.top = event.clientY +'px';

	// star.style.transition = "all 0.5s linear 0s";
	// star.style.transition = "all 0.5s easein 0s";


	// star.style.left = circle.offsetLeft - 20 + 'px';
	// star.style.top = circle.offsettop - 20 + 'px';


	// star.style.width = "50px";
	// star.style.height = "50px";

}


	for ( i = 0; i < 20; i++ ) {
	function animateStars (eventp){
	var star = document.createElement("div");
	star.setAttribute("class","star");
	document.body.appendChild(star);

	star.style.left = event.clientX +'px';
	star.style.top = event.clientY +'px';
}
    
  }

});