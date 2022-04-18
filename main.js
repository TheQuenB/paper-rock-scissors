let options = ['paper', 'rock', 'scissors'];


function computerPlay() {
  currentOption = options[Math.floor(Math.random() * options.length)];
  return currentOption();

}

console.log(computerPlay);