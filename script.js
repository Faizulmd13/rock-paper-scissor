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

// console.log(getComputerChoice());

let getHumanChoice = () => {
  return prompt("Enter your choice").toLowerCase();
};

// console.log(getHumanChoice());

let humanScore = (computerScore = 0);

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
  console.log(`Your Score: ${humanScore}, Computer Score: ${computerScore}`);
};

playRound(getHumanChoice(), getComputerChoice());
