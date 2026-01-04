const boxes = document.querySelectorAll(".insidebox");
const reset = document.querySelector("#reset");
const result = document.querySelector("#result");

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

let gameOver = false;  
let choiceOfX = true;

function checkWinner() {

  if (
    (one.innerHTML === "X" && two.innerHTML === "X" && three.innerHTML === "X") ||
    (four.innerHTML === "X" && five.innerHTML === "X" && six.innerHTML === "X") ||
    (seven.innerHTML === "X" && eight.innerHTML === "X" && nine.innerHTML === "X") ||

    (one.innerHTML === "X" && four.innerHTML === "X" && seven.innerHTML === "X") ||
    (two.innerHTML === "X" && five.innerHTML === "X" && eight.innerHTML === "X") ||
    (three.innerHTML === "X" && six.innerHTML === "X" && nine.innerHTML === "X") ||

    (one.innerHTML === "X" && five.innerHTML === "X" && nine.innerHTML === "X") ||
    (three.innerHTML === "X" && five.innerHTML === "X" && seven.innerHTML === "X")
  ) {
    result.innerHTML = "X won the game";
    gameOver = true;
    boxes.forEach(box => box.style.pointerEvents = "none");
    return;
  }

  else if (
    (one.innerHTML === "O" && two.innerHTML === "O" && three.innerHTML === "O") ||
    (four.innerHTML === "O" && five.innerHTML === "O" && six.innerHTML === "O") ||
    (seven.innerHTML === "O" && eight.innerHTML === "O" && nine.innerHTML === "O") ||

    (one.innerHTML === "O" && four.innerHTML === "O" && seven.innerHTML === "O") ||
    (two.innerHTML === "O" && five.innerHTML === "O" && eight.innerHTML === "O") ||
    (three.innerHTML === "O" && six.innerHTML === "O" && nine.innerHTML === "O") ||

    (one.innerHTML === "O" && five.innerHTML === "O" && nine.innerHTML === "O") ||
    (three.innerHTML === "O" && five.innerHTML === "O" && seven.innerHTML === "O")
  ) {
    result.innerHTML = "O won the game";
    gameOver = true;
    boxes.forEach(box => box.style.pointerEvents = "none");
    return;
  }

  let filledBoxes = 0;

  boxes.forEach((box) => {
    if (box.innerHTML !== "") {
      filledBoxes++;
    }
  });

  if (filledBoxes === 9 && !gameOver) {
    result.innerHTML = "Game draw. Please reset to play again";
    gameOver = true;
    boxes.forEach(box => box.style.pointerEvents = "none");
  }
}


reset.addEventListener("click", function () {

  boxes.forEach((box) => {
    box.innerHTML = "";
    box.style.backgroundColor = "";
    box.style.pointerEvents = "auto";
  });

  result.innerHTML = "";
  choiceOfX = true;
  gameOver = false;    
});

boxes.forEach((box) => {

  box.addEventListener("click", function () {

    if (gameOver) return;        
    if (box.innerHTML !== "") return;

    box.style.backgroundColor = "seagreen";

    if (choiceOfX) {
      box.innerHTML = "X";
      choiceOfX = false;
    } else {
      box.innerHTML = "O";
      choiceOfX = true;
    }

    checkWinner();
  });

});
