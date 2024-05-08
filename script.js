// computer randomly selects their weapon
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
//prompts user to select their weapon
// function getHumanChoice() {
//   let answer = prompt(
//     "Please select your weapon. Type rock, paper, or scissors"
//   );
//   let answerLowerCase = answer.toLowerCase();
//   return answerLowerCase;
// }

//playing five rounds of the game
// function playGame() {
//   let humanChoice = getHumanChoice();

let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let computerChoice = getComputerChoice();
const buttons = document.querySelectorAll("button");
const winner = document.querySelector(".winner");
const score = document.querySelector(".score");
const finalWinner = document.querySelector(".final-winner");

//logic for one round
function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    winner.textContent = `It's a tie.`;
    score.textContent = `Player score = ${playerScore}, Computer score = ${computerScore}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    winner.textContent = `${humanChoice} beats ${computerChoice}. Player wins!`;
    playerScore++;
    rounds++;
    score.textContent = `Player score = ${playerScore}, Computer score = ${computerScore}`;
  } else if (
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    winner.textContent = `${computerChoice} beats ${humanChoice}. Computer wins!`;
    computerScore++;
    rounds++;
    score.textContent = `Player score = ${playerScore}, Computer score = ${computerScore}`;
  }

  if (playerScore === 5 || computerScore === 5) {
    if (computerScore === playerScore) {
      finalWinner.textContent = "It's a draw! Play again?";
    } else if (computerScore > playerScore) {
      finalWinner.textContent = "Computer wins! Play again?";
    } else {
      finalWinner.textContent = "Player Wins! Play again?";
    }
  }
}

// selecting the buttons

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.id) {
      case "rock":
        humanChoice = "rock";
        return humanChoice;
      case "paper":
        humanChoice = "paper";
        return humanChoice;
      case "scissors":
        humanChoice = "scissors";
        return humanChoice;
    }
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(humanChoice, computerChoice);
  });
});
