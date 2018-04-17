//Start game,
    //wins equal 0,
    //losses equal 0,
    //guesses left equal 10,
    //guesses made is an empty array,
    //1. random letter is choosen from array,
        //2. random letter is hidden,
    //3. type a letter for a guess,
        //4. if its right,
            //5. you win!
            //6. increment wins,
            //7. game restarts,
                //picks new random letter,
                //8. clears guesses made array,
                //9. changes guesses left to 10,
        //10. if its wrong,
            //11. deincrement the guesses left
            //12. push wrong letter to guesses made array,
                //13. if guesses left hits greater then 0,
                    //14. guess again,
                    //15. else if guess left equals 0,
                        //16. you lose,
                        //17. incremant losses.
                        //18. restart game
                            //19. clears guesses made array,
                            //20. changes guesses left to 10,

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
    } else if(e.which){ // Netscape/Firefox/Opera                   
      keynum = e.which;
    }
     //4. if its right,
    if(randomLetter === String.fromCharCode(keynum)){
         //5. you win!
        alert("You Win!");
        wins = wins + 1;
        console.log("Your wins: " + wins);

    } else {
        //10. if its wrong,
        alert("wrong letter");
        guessesLeft = guessesLeft - 1;
        console.log("Your guesses left: " + guessesLeft);
        guessesMade.push(String.fromCharCode(keynum));
        console.log(guessesMade);
    }
}