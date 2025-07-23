// Step 1:
// Define getComputerChoice function
// Select a random number 'choice' between 0 - 2
// Return rock, paper, scissor based on choice

let getComputerChoice = function () {
  choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
    default:
      break;
  }
};

// Step 2:
// Define getHumanChoice function
// Read user choice and return it as lowercase

let getHumanChoice = () => {
  return prompt("Enter your choice").toLowerCase();
};

// Step 3:
// Define global variables humanScore, computerScore
// Initialzie both as 0

let humanScore = (computerScore = 0);

// Step 4:
// Define playRound function
// Take humanChoice and computerChoice as parameters
// Compute the result based on if else logic while incrementing the score
// Print result for each round

let playRound = (humanChoice, computerChoice) => {
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      console.log(`It's a tie. ${humanChoice} ties with ${computerChoice}`);
    } else if (computerChoice === "scissor") {
      console.log(`You won! ${humanChoice} beats ${computerChoice}`);
      humanScore += 1;
    } else {
      console.log(`You lose! ${humanChoice} lost against ${computerChoice}`);
      computerScore += 1;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "paper") {
      console.log(`It's a tie. ${humanChoice} ties with ${computerChoice}`);
    } else if (computerChoice === "rock") {
      console.log(`You won! ${humanChoice} beats ${computerChoice}`);
      humanScore += 1;
    } else {
      console.log(`You lose! ${humanChoice} lost against ${computerChoice}`);
      computerScore += 1;
    }
  } else if (humanChoice === "scissor") {
    if (computerChoice === "scissor") {
      console.log(`It's a tie. ${humanChoice} ties with ${computerChoice}`);
    } else if (computerChoice === "paper") {
      console.log(`You won! ${humanChoice} beats ${computerChoice}`);
      humanScore += 1;
    } else {
      console.log(`You lose! ${humanChoice} lost against ${computerChoice}`);
      computerScore += 1;
    }
  } else {
    console.log(`Your choice ${humanChoice} is invalid`);
  }
};

// Step 5:
// Define playGame function
// Calls playRound until either humanScore or computerScore is 5

function playGame() {
  while (humanScore != 5 && computerScore != 5) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Your Score: ${humanScore}, Computer Score: ${computerScore}`);
  }
}

playGame();
