let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  console.log(choices[randomNumber]);
}

function getHumanChoice() {
  let answer = prompt(
    "Please select your weapon. Type rock, paper, or scissors"
  );
  let answerLowerCase = answer.toLowerCase();
  console.log(answerLowerCase);
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

// function playRound(humanChoice, computerChoice) {
//     if (humanChoice)
// }
