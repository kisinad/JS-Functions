//Number Guessing Game

//var i = Math.floor((Math.random() * 100) + 1); //Generates random numbers and stores it in i
var randomNumber = (triallTimes, numTimes) => {
   //Number Guessing Game
var y = Math.floor(Math.random() * 100) + 1; //Generates random numbers and stores it in i

var j; //gets the modulus and stores the result in j
if ((j=y%2)==0) //Conitioin checks to see if the result in module is zero or not
	alert (" Number is Even"); 
else 
	alert (" Number is odd");

for(var count=1;count<=triallTimes;count++)
{
		let num = prompt ("Please enter a number:"); //Captures user input
	if (num<1 || num>numTimes){
		alert("Out of range");
	}

	if (num==y){
		alert("You WIN!");
		break;
	}
	if (num<y){
		alert("Number is lower, make another guess");
	}
	if (num>y){
				alert("Number is higher,make another guess");
			}
	if (count==triallTimes){	
			alert("You LOSE!");}
};





};
randomNumber(10,100);



