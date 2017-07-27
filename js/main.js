
// Nous stockons nos 4 images dans une variable
var pictures=["img/ELIOT.jpg", "img/fsociety.jpg", "img/snowden.jpg", "img/eliot.jpg"];
var i=0; //ceci est notre première photo par rapport au tableau ci dessus.




setInterval(function(){ //le "i" va être incrémenté
document.getElementById("slider").src=pictures[i]; // Nous récupérons notre slider


i++; //on incrémente de 1

	if(i===4){ //Je déclare ma condition : Si i = 4 alors retourne à 0. 
	i=0; // Ceci veut dire que le i va revenir à la première photo
}

}, 2000);
 

 function one(){ //en cliquant sur "one" il va chercher cette fonction dans mon html
 document.getElementById('slider').src=pictures[0];
 };

 function two(){ //en cliquant sur "two" il va chercher cette fonction dans mon html
 document.getElementById('slider').src=pictures[1];
 };

 function three(){ //en cliquant sur "three" il va chercher cette fonction dans mon html
 document.getElementById('slider').src=pictures[2];
 };

 function four(){ //en cliquant sur "four" il va chercher cette fonction dans mon html
 document.getElementById('slider').src=pictures[3];
 };