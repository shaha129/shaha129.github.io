!function() {
	var t = 2 * Math.PI
	  , i = {
		x: 1,
		y: 1
	}
	  , s = function(s, h) {
		this.canvas = document.getElementById(s),
		this.ctx = null ,
		this.particles = [],
		this.starsCounter = h,
		this.maxW = window.innerWidth,
		this.maxH = window.innerHeight,
		this.init = function() {
			var t = this.canvas;
			t.width = this.maxW,
			t.height = this.maxH,
			this.ctx = t.getContext("2d");
			for (var i = 0; i < this.starsCounter; i++) {
				var s = new n(i,this.maxW,this.maxH);
				this.particles.push(s)
			}
			window.addEventListener("resize", this.onResize.bind(this), !1)
		}
		,
		this.onMouseMove = function(t) {
			i = {
				x: t.offsetX,
				y: t.offsetY
			}
		}
		,
		this.onResize = function() {
			var t = this.canvas;
			this.maxW = window.innerWidth,
			this.maxH = window.innerHeight,
			t.width = this.maxW,
			t.height = this.maxH;
			for (var i = this.particles, s = 0; s < i.length; s++)
				i[s].onResize(this.maxW, this.maxH)
		}
		,
		this.animate = function() {
			var t = this;
			requestAnimationFrame(function() {
				t.animate()
			}),
			t.render()
		}
		,
		this.render = function() {
			var t = .00075 * (new Date).getTime()
			  , i = this.ctx;
			i.clearRect(0, 0, this.maxW, this.maxH);
			for (var s = this.particles, h = 0; h < s.length; h++) {
				s[h].onUpdate(i, t)
			}
		}
		;
		var n = function(i, s, h) {
			return this.id = i,
			this.x = Math.random() * s,
			this.y = Math.random() * h,
			this.radius = Math.random(),
			this.alpha = Math.random(),
			this.velocity = .05 * this.radius,
			this.onUpdate = function(i, s) {
				this.alpha = Math.abs(.8 * Math.sin(s + this.id)),
				this.x -= this.velocity,
				this.x <= 0 && (this.x = window.innerWidth),
				i.beginPath(),
				i.fillStyle = "rgba(255, 255, 255, " + this.alpha + ")",
				i.arc(this.x, this.y, this.radius, 0, t),
				i.fill(),
				i.closePath()
			}
			,
			this.onResize = function(t, i) {
				this.x = Math.random() * t,
				this.y = Math.random() * i
			}
			,
			this
		}
		;
		this.init(),
		this.animate()
	}
	;
	window.stars = new s("star-field",50)
}();











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

  var mouseX, mouseY;
    if(e.offsetX) {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
    }
    else if(e.layerX) {
        mouseX = e.layerX;
        mouseY = e.layerY;
    }
  for(i=0; i<3; i++){
    var p = new Particle(mouseX, mouseY);
    particles.push(p);
  }
 }, false);


	for ( i = 0; i < 20; i++ ) {
	function animateStars (eventp){
	var star = document.createElement("div");
	star.setAttribute("class","star");
	document.body.appendChild(star);

	star.style.left = event.clientX +'px';
	star.style.top = event.clientY +'px';

	function draw(){
  for(i=0; i<particles.length; i++){
    particles[i].draw();
  }
}

}
    
  };




