// Start game,
    // total wins equal 0,
    // total losses equal 0,
    // guesses left equal 10,
    // guesses made starts as an empty array and where wrong guesses are pushed,
    // random letter is choosen from array,
        // random letter is hidden,
    // type a letter for a guess,
        // if you've already guessed the letter "already guessed, try again"
        // if its not in the array "Not a letter, guess again"
        // if its right,
            // you win!
            // increment wins,
            // game restarts,
                // picks new random letter,
                // clears guesses made array,
                // changes guesses left to 10,
        // if its wrong,
            // deincrement the guesses left
            // push wrong letter to guesses made array,
                // if guesses left hits greater then 0,
                    // guess again,
                    // else if guess left equals 0,
                        // you lose,
                        // incremant losses.
                        // restart game
                            // picks new random letter,
                            // clears guesses made array,
                            // changes guesses left to 10,

// total wins,
var wins = 0;
// total losses,
var losses = 0;
// guesses left,
var guessesLeft = 10;
// guesses made starts as an empty array and where wrong guesses are pushed,
var guessesMade = []; 
// random letter is choosen from an array.                           
var letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var randomLetter = letter[Math.floor(Math.random()* letter.length)];
// not printing it out keeps it hidden.
console.log(randomLetter);
// type a letter for a guess,
function myKeyPress(e){
    var keynum;
    if(window.event) { // IE                    
      keynum = e.keyCode;
    } else if (e.which){ // Netscape/Firefox/Opera                   
      keynum = e.which;
    }
    // if its not in the array "Not a letter, guess again"
    if (letter.includes(String.fromCharCode(keynum)) === false){
        console.log("Not a letter, guess again");
    // if you've already guessed the letter "already guessed, try again"   
    } else if (guessesMade.includes(String.fromCharCode(keynum)) === true) {    
        console.log("already guessed, try again")
    // if its right,    
    } else if (randomLetter === String.fromCharCode(keynum)){
        // you win!
        alert("You Win!");
        console.log("You Win!")
        // increment wins,
        wins = wins + 1;
        console.log("Your wins: " + wins);
        // game restarts, picks new random letter,
        randomLetter = letter[Math.floor(Math.random()* letter.length)];
        console.log(randomLetter);
        // clears guesses made array,
        guessesMade = [];
        // changes guesses left to 10,
        guessesLeft = 10;
    } else {
        // if its wrong,
        alert("wrong letter");
        guessesLeft = guessesLeft - 1;
        console.log("Your guesses left: " + guessesLeft);
        // else if guess left equals 0,
        if (guessesLeft === 0){
            // you lose,
            console.log("You've no guesses left. You lose");
            losses = losses + 1;
            // game restarts, picks new random letter,
            randomLetter = letter[Math.floor(Math.random()* letter.length)];
            console.log(randomLetter);
            // clears guesses made array,
            guessesMade = [];
            // changes guesses left to 10,
            guessesLeft = 10;
        } else {
            // push wrong letter to guesses made array,
            guessesMade.push(String.fromCharCode(keynum));
            console.log(guessesMade);
        }
    }
}