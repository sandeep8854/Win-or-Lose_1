const computerChoiceDisplay = document.getElementById("computer_choice");
const userChoiceDisplay = document.getElementById("user_choice");
const resultDisplay = document.getElementById("result_choice");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let find_Result;
possibleChoices.forEach((possibleCho) =>
  possibleCho.addEventListener("click", (e) => {
    userChoice = e.target.innerHTML; // e.target.id
    userChoiceDisplay.innerHTML = userChoice;
    genComputerChoice();
    getResult();
  })
);

function genComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);
  if (randomNumber === 1) {
    computerChoice = "Rock";
  }
  if (randomNumber === 2) {
    computerChoice = "Paper";
  }
  if (randomNumber === 3) {
    computerChoice = "Scissor";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (userChoice === computerChoice) {
    find_Result = "It a draw!";
  }
  if (computerChoice == "Rock" && userChoice == "Scissor") {
    find_Result = "You lose!";
  }
  if (computerChoice == "Rock" && userChoice == "Paper") {
    find_Result = "You win!";
  }
  if (computerChoice == "Scissor" && userChoice == "Paper") {
    find_Result = "You lose!";
  }
  if (computerChoice == "Scissor" && userChoice == "Rock") {
    find_Result = "You win!";
  }
  if (computerChoice == "Paper" && userChoice == "Scissor") {
    find_Result = "You win";
  }
  if (computerChoice == "Paper" && userChoice == "Rock") {
    find_Result = "You lose!";
  }
  resultDisplay.innerHTML = find_Result;
}
