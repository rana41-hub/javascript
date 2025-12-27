//Print even numbers from 0 to 100

/*for(let i = 1 ; i <= 100 ; i++) {

  if(i % 2 == 0) {

    console.log("i = ",i);
  }
}*/

//Create a game where you start with any random number . Ask the user to keep guessing the number until the user enters the correct value .

let num = 29;
let userNum = prompt("Enter the number : ");

while(userNum != num) {
    
    userNum = prompt("Wrong guess , try again : ");
} 

console.log("Right guess , You won");