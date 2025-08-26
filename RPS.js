function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      computerChoice = "rock";
      // Code to execute if expression === value1
      break;
    case 1:
      computerChoice = "scissors";
      // Code to execute if expression === value2
      break;
    // ... more cases
    case 2:
      computerChoice = "paper";
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
    if (humanChoice == "rock" && botChoice == "paper") {
      console.log(humanChoice, computerChoice);
      console.log("Computer Wins!");
      computerScore += 1;
    } else if (humanChoice == "rock" && botChoice == "scissors") {
      console.log(humanChoice, computerChoice);
      console.log("Player Wins!");
      playerScore += 1;
    } else if (humanChoice == "scissors" && botChoice == "rock") {
      console.log(humanChoice, computerChoice);
      console.log("Computer Wins!");
      computerScore += 1;
    } else if (humanChoice == "scissors" && botChoice == "paper") {
      console.log(humanChoice, computerChoice);
      console.log("Players Wins!");
      playerScore += 1;
    } else if (humanChoice == "paper" && botChoice == "rock") {
      console.log(humanChoice, computerChoice);
      console.log("Players Wins!");
      playerScore += 1;
    } else if (humanChoice == "paper" && botChoice == "scissors") {
      console.log(humanChoice, computerChoice);
      console.log("Computer Wins!");
      computerScore += 1;
    } else {
      console.log(humanChoice, computerChoice);
      console.log("It's a draw");
    }

    console.log(playerScore, computerScore);
  }

  for (i = 0; i < numberOfRounds; i++) {
    const newHumanChoice = getPlayerChoice();
    const newBotChoice = getComputerChoice();
    playRound(newHumanChoice, newBotChoice);
  }
  if (playerScore > computerScore) {
    console.log("Player wins the game!");
  } else if (computerScore > playerScore) {
    console.log("The computer wins the game!");
  } else {
    console.log("It's a tie!");
  }
}

playGame(5);
