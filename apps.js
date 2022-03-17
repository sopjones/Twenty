/*

1. use a do/while loop to get the computer number. the loop will stop if the computer number is equal or greater than 16. the computer number is made of random numbers 1 to 10, that keeps adding to itself until it reaches 16 or over.

*/

alert("\n\n Welcome to 20! This is a competition to see which player gets closer to the number 20. \n\n You are going to be playing against the computer. \n\n You will draw numbers from 1 to 10. The computer will stop at 16. \n\n Pay attention to the screen to see what your total is. If you need another number, press `y`.");

alert("Now, it is the computer's turn.");

var computerNumber = 0;

do {
   var randomNumber = Math.floor(Math.random() * 10) + 1

   computerNumber = computerNumber + randomNumber 

   alert(`Computer new number is ${randomNumber}.\n\n Computer total is now ${computerNumber}`)


} while ( computerNumber < 16 )


alert(`We exit the loop. Computer total is ${computerNumber}`)

alert(`Would you like to add another number? If so, press enter.`);

var computerNumber = 0;

do {
   var randomNumber = Math.floor(Math.random() * 10) + 1

   computerNumber = computerNumber + randomNumber 

   alert(`Computer new number is ${randomNumber}.\n\n Computer total is now ${computerNumber}`)


} while ( computerNumber < 16 )


alert(`We exit the loop. Computer total is ${computerNumber}`);




