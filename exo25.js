const randomNum = Math.floor(Math.random() * 10) + 1;

// Ask the user for a guess
const userGuess = parseInt(prompt("Guess a number between 1 and 10:"), 10);

// Check if the guess is correct
if (userGuess === randomNum) {
  alert("Good Work");
} else {
  alert("Not matched. The correct number was " + randomNum);
}