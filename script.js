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

console.log(getComputerChoice());

let getHumanChoice = () => {
  return prompt("Enter your choice").toLowerCase();
};

console.log(getHumanChoice());
