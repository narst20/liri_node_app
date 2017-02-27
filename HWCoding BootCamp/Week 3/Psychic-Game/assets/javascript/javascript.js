
//Generate array for random letter
 letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
	var letterguess=letter[Math.floor(Math.random() * letter.length)];
	console.log(letterguess);

//Define Wins, losses, and guesses left
	var wintitle="Number of wins:  ";
	var wins=0;
	var losstitle="Number of losses:  ";
	var losses=0;
	var guesslefttitle= "Guesses left:  " ;
	var guessesleft=10;
	var guessessofartitle= "Guesses so far:  ";
	var userGuess =[];
	
	document.getElementById("wins").innerHTML =  wintitle + wins;
	document.getElementById("losses").innerHTML =  losstitle + losses;
	document.getElementById("guessesleft").innerHTML = guesslefttitle + guessesleft;
	document.getElementById("userGuess").innerHTML = guessessofartitle + userGuess;

for(var num=0; num < 11; num++) {
 //Put guesses in array
 //Run function to keyboard
		document.onkeyup = function(event) {
			// Determines which key was pressed
			guess1 = event.key;
			//Verify function works
			console.log(guess1);
			//Add key press to array
			userGuess.push(guess1);
			console.log(userGuess);
			document.getElementById("userGuess").innerHTML = guessessofartitle + userGuess;
};

// pick random letter from array
function();

//Evaluate if user's guess is correct in 10 tries
	console.log(guess1);
		if (guess1===letterguess) {
			alert("The letter was "+ letterguess +"! You win!");
			console.log(wins);
			wins++;
			var guessesleft=10;
			var userGuess =[];
			document.getElementById("wins").innerHTML =  wintitle + wins;
			document.getElementById("losses").innerHTML =  losstitle + losses;
			document.getElementById("guessesleft").innerHTML = guesslefttitle + guessesleft;
			document.getElementById("userGuess").innerHTML = guessessofartitle + userGuess;
		}

		if (guess1!==letterguess) {
			alert("Wrong! Try again");
			console.log(guessesleft);
			guessesleft--;
			document.getElementById("wins").innerHTML =  wintitle + wins;
			document.getElementById("losses").innerHTML =  losstitle + losses;
			document.getElementById("guessesleft").innerHTML = guesslefttitle + guessesleft;
			document.getElementById("userGuess").innerHTML = guessessofartitle + userGuess;
		}

	
	}
		
	if (guessesleft===0) {
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



