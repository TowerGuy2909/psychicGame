// Start game,
    // total wins equal 0,
    // total losses equal 0,
    // guesses left equal 10,
    // guesses made so far starts as an empty array and where wrong guesses are pushed,
    // random letter is choosen from array,
        // random letter is hidden,
    // type a letter for a guess,
        // if you've already guessed the letter "already guessed, try again"
        // if its not in the array "Not a letter, guess again"
        // if its right,
            // you win!
            // increment wins,
            // prints out win on index.html
            // game restarts,
                // picks new random letter,
                // clears guesses made array,
                // changes guesses left to 10,
        // if its wrong,
            // deincrement the guesses left
            // prints out guessesLeft on index.html
                // if guesses left hits greater then 0,
                    // guess again,
                // else if guess left equals 0,
                    // you lose,
                    // incremant losses.
                    // prints out losses on index.html
                    // restart game
                        // picks new random letter,
                        // clears guesses made array,
                        // changes guesses left to 10,
                // else push wrong letter to guesses made array,
                // prints out guessesSoFar on index.html

// total wins,
var wins = 0;
// total losses,
var loses = 0;
// guesses left,
var guessesLeft = 10;
// guesses made so far starts as an empty array and where wrong guesses are pushed,
var guessesSoFar = []; 
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
        alert("Not a letter, guess again");
    // if you've already guessed the letter "already guessed, try again"   
    } else if (guessesSoFar.includes(String.fromCharCode(keynum)) === true) {    
        console.log("already guessed, try again")
        alert("already guessed, try again");
    // if its right,    
    } else if (randomLetter === String.fromCharCode(keynum)){
        // you win!
        alert("You Win!");
        console.log("You Win!")
        // increment wins,
        wins = wins + 1;
        console.log("Your wins: " + wins);
        // prints out win on index.html
        document.getElementById("wins").innerHTML = wins;
        // game restarts, picks new random letter,
        randomLetter = letter[Math.floor(Math.random()* letter.length)];
        console.log(randomLetter);
        // clears guesses made array,
        guessesSoFar = [];
        // changes guesses left to 10,
        guessesLeft = 10;
    } else {
        // if its wrong,
        alert("wrong letter");
        // deincrement the guesses left,
        guessesLeft = guessesLeft - 1;
        console.log("Your guesses left: " + guessesLeft);
        // prints out guessesLeft on index.html
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        // else if guess left equals 0,
        if (guessesLeft === 0){
            // you lose,
            loses = loses + 1;
            console.log("You've no guesses left. You lose");
            // prints out loses on index.html
            document.getElementById("loses").innerHTML = loses;
            // game restarts, picks new random letter,
            randomLetter = letter[Math.floor(Math.random()* letter.length)];
            console.log(randomLetter);
            // clears guesses made array,
            guessesSoFar = [];
            // changes guesses left to 10,
            guessesLeft = 10;
        } else {
            // push wrong letter to guesses made array,
            guessesSoFar.push(String.fromCharCode(keynum));
            console.log(guessesSoFar);
            // prints out guessesSoFar on index.html
            document.getElementById("guessesSoFar").innerHTML = guessesSoFar;
        }
    }
}