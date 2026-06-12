function computer_player (){

  let random = Math.random() * 3;                             
  let computer_choice;
  let result_msg;
  let computer_choiceMsg;
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

  alert(`Your choice is Bat , ${computer_choiceMsg} , ${result_msg}`);
}

function user_bat() {

   if(computer_choice === 'Bat') {
    result_msg = `It's a Tie`;
    
  }
  else if (computer_choice === 'Ball') {
    result_msg = `You won`;
  }
  else {
    result_msg = `Computer Won`;
  };
  return result_msg;
};

function user_ball() {

  if(computer_choice === 'Bat') {
    result_msg = `Computer Won`;
    
  }
  else if (computer_choice === 'Ball') {
    result_msg = `It's a Tie`;
  }
  else {
    result_msg = `You Won`;
  };
  return result_msg;
};

function user_stump(){

    if(computer_choice === 'Bat') {
    result_msg = `Computer Won`;
    
  }
  else if (computer_choice === 'Ball') {
    result_msg = `You Won`;
  }
  else {
    result_msg = `It's a Tie`;
  };
  return result_msg;
};