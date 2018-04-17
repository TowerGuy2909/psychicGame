// Start game,
    // wins equal 0,
    // losses equal 0,
    // guesses left equal 10,
    // guesses made is an empty array,
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
                            // clears guesses made array,
                            // changes guesses left to 10,

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesMade = []; 
//1. random letter is choosen from an array.                           
var letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var randomLetter = letter[Math.floor(Math.random()* letter.length)];
//2. not printing it out keeps it hidden.
console.log(randomLetter);
//3. type a letter for a guess,
function myKeyPress(e){
    var keynum;
    if(window.event) { // IE                    
      keynum = e.keyCode;
    } else if (e.which){ // Netscape/Firefox/Opera                   
      keynum = e.which;
    }
    //4. if its right,
    if (letter.includes(String.fromCharCode(keynum)) === false){
        console.log("Not a letter, guess again");
    } else if (guessesMade.includes(String.fromCharCode(keynum)) === true) {    
        console.log("already guessed, try again")
    } else if (randomLetter === String.fromCharCode(keynum)){
            //5. you win!
            alert("You Win!");
            console.log("You Win!")
            wins = wins + 1;
            console.log("Your wins: " + wins);
  
        } else {
            //10. if its wrong,
            alert("wrong letter");
            guessesLeft = guessesLeft - 1;
            console.log("Your guesses left: " + guessesLeft);
            if (guessesLeft === 0){
                console.log("You've no guesses left. You lose");
            } else {
                guessesMade.push(String.fromCharCode(keynum));
                console.log(guessesMade);
        }
    }
}