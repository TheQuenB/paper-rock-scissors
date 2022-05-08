let options = ['paper', 'rock', 'scissors'];


function computerPlay() {
  let options = ['paper', 'rock', 'scissors'];
  currentOption = options[Math.floor(Math.random() * options.length)];
  return currentOption

}
console.log(computerPlay);

function playRound(playerSelection, computerSelection) {
  if( playerSelection == 'rock'){
    if (computerSelection == 'paper')
    return " You Lose! Paper beats Rock"
    else if ( computerSelection == playerSelection)
    return 'Tied!'
    else return "You Win!"
  
  }

  else if( playerSelection =='paper'){
    if (computerSelection == 'scissor')
    return "You Lose! Scissors beat Paper"
    else if ( computerSelection == playerSelection)
    return 'Tied'
    else return "You Win!"
  
  }

  else if( playerSelection == 'scissors'){
    if (computerSelection == 'rock')
    return " You Lose! Rocks beats Scissors"
    else if ( computerSelection == playerSelection)
    return 'Tied'
    else return "You Win!"
  
  }

  }


 
  console.log(playRound(playerSelection, computerSelection));
 


function game() {
  const playerSelection= prompt("Rock, Paper or Scissor?");
  const computerSelection = computerPlay();
  const char = playerSelection.substring(0,1).toUpperCase;
  
  for (let i = 0; i < 5; i++){
    playRound();
    
    
  
  }
  console.log(game)
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  