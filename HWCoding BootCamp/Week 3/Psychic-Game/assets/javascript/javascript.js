
//Computer picks random letter
 letter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
	 console.log(letter)

//Define Wins, losses, and guesses left


	var wintitle="Number of wins:  "
	var wins=0
	var losstitle="Number of losses:  "
	var losses=0
	var guesslefttitle= "Guesses left:  " 
	var guessesleft=10
	var guessessofartitle= "Guesses so far:  "
	var userGuess =[];
	
	document.getElementById("wins").innerHTML =  wintitle + wins;
	document.getElementById("losses").innerHTML =  losstitle + losses;
	document.getElementById("guessesleft").innerHTML = guesslefttitle + guessesleft;
	document.getElementById("userGuess").innerHTML = guessessofartitle + userGuess;

	
 //Put guesses in array
	//Define array as empty


	//Run function to keyboard
		document.onkeyup = function(event) {
			// Determines which key was pressed
			guess1 = event.key;
			//Verify function works
			console.log(guess1);
			//Add key press to array
			userGuess.push(guess1);
			console.log(userGuess)
			document.getElementById("userGuess").innerHTML = guessessofartitle + userGuess;


				};
	 	



// //Evaluate if user's guess is computer's guess in 10 tries
	for(var num=0; num < 11; num++) {
		guess1;
		if (guess1===letter) {
			alert("The letter was "+ letter +"! You win!");
			console.log(wins);
			wins++;
			var guessesleft=10;
			var userGuess =[];
			document.getElementById("wins").innerHTML =  wintitle + wins;
			document.getElementById("losses").innerHTML =  losstitle + losses;
			document.getElementById("guessesleft").innerHTML = guesslefttitle + guessesleft;
			document.getElementById("userGuess").innerHTML = guessessofartitle + userGuess;
		}
	

		else if (userGuess.indexOf(letter)===-1)	{
			console.log(guessesleft);
			guessesleft--;
			console.log(num);
			num++;
			var userGuess =[];
			document.getElementById("wins").innerHTML =  wintitle + wins;
			document.getElementById("losses").innerHTML =  losstitle + losses;
			document.getElementById("guessesleft").innerHTML = guesslefttitle + guessesleft;
			document.getElementById("userGuess").innerHTML = guessessofartitle + userGuess;
		}

	else if (guessesleft===0) {
		alert("No more tries! You lose!");
		console.log(losses);
		losses++;
		var guessesleft=10;
		var userGuess =[];
		document.getElementById("wins").innerHTML =  wintitle + wins;
		document.getElementById("losses").innerHTML =  losstitle + losses;
		document.getElementById("guessesleft").innerHTML = guesslefttitle + guessesleft;
		document.getElementById("userGuess").innerHTML = guessessofartitle + userGuess;
	}
}


