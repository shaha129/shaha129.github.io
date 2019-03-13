


$(function swap() {
  // Your interactions go here
 
   var froyo = document.getclass ('froyo');
   var flavors= document.getclass ('flavors');
   froyoSRC = froyo.src;
   flavorsSRC= flavors.src;

   froyo.src = flavors.src;
   flavors.src = froyo.src;
});
