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
  console.log(computerChoice);
}

function getPlayerChoice() {
  let playerChoice = prompt(
    "Please select your weapon: rock, scissors, or paper"
  );
  if (playerChoice != "") {
    alert("Please select a weapon");
  }
  console.log(playerChoice);
}

getPlayerChoice();
getComputerChoice();
