var myName= 'Amal';

console.log( "My name is", myName);

var favNumber = 3;

console.log("My favorite number is", favNumber);

var favNumberstring = '3';

console.log( "My favorite number is", favNumberstring);

var boolean = true;

console.log(boolean);

var arrayName = ['A', 'M', 'A', 'L'];
console.log(arrayName);

var arraydatatypes = ['AMAL', 3, false];
console.log(arraydatatypes);

var addstrings = 'AMAL' 
+ 'SHAHEEDI';
console.log(addstrings);

var addintegers = 50 + 50; 
console.log(addintegers);

console.log(arrayName.length);

console.log('supercalifragilisticexpialidocious'.length);

console.log(addstrings[0].length);
console.log(addstrings[1].length);

if ('all students are here') {
	console.log('all the students are in class')
} else {
	console.log('Not everyone is here.')
};


for (var i = 0; i < arrayName.length; i++) { 
	console.log( arrayName[i] );
}

var date = new Date;
var hour = date.getHours();
var minutes = date.getMinutes();

if ( hour >= 7 ) {
  console.log("it's between 7pm and 9:40pm");
} else if ( hour >= 9  && minutes >= 40) {
  console.log("it's not between 7pm and 9:40pm");
} 



var favfoods = ['burger', 'sushi', 'avacados'];
console.log(favfoods);


var favanimals = ['dog', 'whale', 'panda'];
console.log(favanimals);

var favplaces = ['pakistan', 'india', 'singapore'];
console.log(favplaces);

var favpokemon = ['lugia', 'charizard', 'snorlax'];
console.log(favpokemon);
