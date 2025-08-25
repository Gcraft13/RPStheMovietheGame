function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      computerChoice = "Rock";
      // Code to execute if expression === value1
      break;
    case 1:
      computerChoice = "Scissors";
      // Code to execute if expression === value2
      break;
    // ... more cases
    case 2:
      computerChoice = "Paper";
      // Code to execute if expression === value2
      break;
    default:
      console.log("please pick a weapon!");
  }
  return computerChoice;
}

function getPlayerChoice() {
  let playerChoice = prompt(
    "Please select your weapon: rock, scissors, or paper"
  );

  return playerChoice;
}

function playGame(numberOfRounds) {
  let playerScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, botChoice) {
    if ((humanChoice == "rock") & (botChoice == "paper")) {
      console.log("Computer Wins!");
      computerScore += 1;
    }
  }

  for (i = 0; i < numberOfRounds; i++) {
    const newHumanChoice = getPlayerChoice();
    const newBotChoice = getComputerChoice();
    playRound(newHumanChoice, newBotChoice);
    console.log(newHumanChoice, newBotChoice);
  }
}

playGame(5);
