//Start game,
    //1. random letter is choosen from array,
        //2. random letter is hidden,
    //3. type a letter for a guess,
        //4. if its right,
            //5. you win!
            //6. increment wins,
            //7. game restarts,
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

var letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var randomLetter = letter[Math.floor(Math.random()* letter.length)];

console.log(randomLetter);

// function myFunction() {
//     let x = document.getElementById("fname");
//     x.value = x.value.toUpperCase();
// }