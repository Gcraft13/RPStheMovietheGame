//computer randomly selects their weapon
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
//prompts user to select their weapon
function getHumanChoice() {
  let answer = prompt(
    "Please select your weapon. Type rock, paper, or scissors"
  );
  let answerLowerCase = answer.toLowerCase();
  return answerLowerCase;
}

//playing five rounds of the game
function playGame() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  let playerScore = 0;
  let computerScore = 0;
  let rounds = 0;

  //logic for one round
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("It's a tie. Try again.");
      console.log(
        `Player score = ${playerScore}, Computer score = ${computerScore}`
      );
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      console.log(` ${humanChoice} beats ${computerChoice}. Player wins!`);
      playerScore++;
      rounds++;
      console.log(
        `Player score = ${playerScore}, Computer score = ${computerScore}`
      );
    } else if (
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")
    ) {
      console.log(`${computerChoice} beats ${humanChoice}. Computer wins!`);
      computerScore++;
      rounds++;
      console.log(
        `Player score = ${playerScore}, Computer score = ${computerScore}`
      );
    }
  }
  //Plays five rounds
  for (i = 1; i <= 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
  //talling the final scores
  if (computerScore === playerScore) {
    console.log("It's a draw!");
  } else if (computerScore > playerScore) {
    console.log("Computer wins!");
  } else {
    console.log("Player Wins!");
  }
}

playGame();
