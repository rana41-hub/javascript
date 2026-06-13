let score = {
  won : 0,
  lost : 0,
  tie : 0,
};

let computer_choice;
let computer_choiceMsg
let user_choice;
let result_msg;

function computer_player (){

  let random = Math.random() * 3;                             


  if(random > 0 && random <= 1) {
     computer_choice = 'Bat';
  }
  else if (random > 1 && random <= 2) {
     computer_choice = 'Ball';
  }
  else {
     computer_choice = 'Stump';
  };

  return computer_choice;
};

function alert_message () {

  document.querySelector('.result').innerText = `Your choice is ${user_choice} , ${computer_choiceMsg} , ${result_msg} , 
    
    Score is 
    
    won : ${score.won}
    lose : ${score.lost}
    tie : ${score.tie}`
};

function user_bat() {

   if(computer_choice === 'Bat') {
    result_msg = `It's a Tie`;
    score.tie++;
    
  }
  else if (computer_choice === 'Ball') {
    result_msg = `You won`;
    score.won++;
  }
  else {
    result_msg = `Computer Won`;
    score.lost++;
  };
  return result_msg;
  
};

function user_ball() {

  if(computer_choice === 'Bat') {
    result_msg = `Computer Won`;
    score.lost++;
    
  }
  else if (computer_choice === 'Ball') {
    result_msg = `It's a Tie`;
    score.tie++;
  }
  else {
    result_msg = `You Won`;
    score.won++;
  };
  return result_msg;
  
};

function user_stump(){

    if(computer_choice === 'Bat') {
    result_msg = `You Won`;
    score.won++;
    
  }
  else if (computer_choice === 'Ball') {
    result_msg = `Computer Won`;
    score.lost++;
  }
  else {
    result_msg = `It's a Tie`;
    score.tie++;
  };
  return result_msg;
  
};