document.addEventListener("DOMContentLoaded", function () {
  let rock = document.getElementById("rock");
  let paper = document.getElementById("paper");
  let scissor = document.getElementById("scissor");
  let result = document.getElementById("result");
  let user;
  let humanChoice;

  function handleClick(choice) {
    humanChoice = choice;
    playRound(humanChoice, getComputerChoice());
  }

  rock.addEventListener("click", () => handleClick("rock"));
  paper.addEventListener("click", () => handleClick("paper"));
  scissor.addEventListener("click", () => handleClick("scissor"));

  function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

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
  }

  let humanScore = (computerScore = 0);
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
      if (computerChoice === "rock") {
        let userChoice = (document.getElementById("user-choice").innerHTML =
          " ✊");
        let computersChoice = (document.getElementById(
          "computer-choice"
        ).innerHTML = " ✊");
        result.innerHTML = `It's a tie. ${humanChoice} ties with ${computerChoice}`;
        console.log(`It's a tie. ${humanChoice} ties with ${computerChoice}`);
      } else if (computerChoice === "scissor") {
        let userChoice = (document.getElementById("user-choice").innerHTML =
          " ✊");
        let computersChoice = (document.getElementById(
          "computer-choice"
        ).innerHTML = " ✌️");
        result.innerHTML = `You won! ${humanChoice} beats ${computerChoice}`;
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
      } else {
        let userChoice = (document.getElementById("user-choice").innerHTML =
          " ✊");
        let computersChoice = (document.getElementById(
          "computer-choice"
        ).innerHTML = " ✋");
        result.innerHTML = `You lose! ${humanChoice} lost against ${computerChoice}`;
        console.log(`You lose! ${humanChoice} lost against ${computerChoice}`);
        computerScore += 1;
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "paper") {
        let userChoice = (document.getElementById("user-choice").innerHTML =
          " ✋");
        let computersChoice = (document.getElementById(
          "computer-choice"
        ).innerHTML = " ✋");
        result.innerHTML = `It's a tie. ${humanChoice} ties with ${computerChoice}`;
        console.log(`It's a tie. ${humanChoice} ties with ${computerChoice}`);
      } else if (computerChoice === "rock") {
        let userChoice = (document.getElementById("user-choice").innerHTML =
          " ✋");
        let computersChoice = (document.getElementById(
          "computer-choice"
        ).innerHTML = " ✊");
        result.innerHTML = `You won! ${humanChoice} beats ${computerChoice}`;
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
      } else {
        let userChoice = (document.getElementById("user-choice").innerHTML =
          " ✋");
        let computersChoice = (document.getElementById(
          "computer-choice"
        ).innerHTML = " ✌️");
        result.innerHTML = `You lose! ${humanChoice} lost against ${computerChoice}`;
        console.log(`You lose! ${humanChoice} lost against ${computerChoice}`);
        computerScore += 1;
      }
    } else {
      if (computerChoice === "scissor") {
        let userChoice = (document.getElementById("user-choice").innerHTML =
          " ✌️");
        let computersChoice = (document.getElementById(
          "computer-choice"
        ).innerHTML = " ✌️");
        result.innerHTML = `It's a tie. ${humanChoice} ties with ${computerChoice}`;
        console.log(`It's a tie. ${humanChoice} ties with ${computerChoice}`);
      } else if (computerChoice === "paper") {
        let userChoice = (document.getElementById("user-choice").innerHTML =
          " ✌️");
        let computersChoice = (document.getElementById(
          "computer-choice"
        ).innerHTML = " ✋");
        result.innerHTML = `You won! ${humanChoice} beats ${computerChoice}`;
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
      } else {
        let userChoice = (document.getElementById("user-choice").innerHTML =
          " ✌️");
        let computersChoice = (document.getElementById(
          "computer-choice"
        ).innerHTML = " ✊");
        result.innerHTML = `You lose! ${humanChoice} lost against ${computerChoice}`;
        console.log(`You lose! ${humanChoice} lost against ${computerChoice}`);
        computerScore += 1;
      }
    }
    let userScore = (document.getElementById(
      "user-score"
    ).innerHTML = `Player: ${humanScore}`);
    let computersScore = (document.getElementById(
      "computer-score"
    ).innerHTML = `Computer: ${computerScore}`);

    if (humanScore === 5 || computerScore === 5) {
      endGame();
    }
  }

  function endGame() {
    if (humanScore === 5) {
      result.innerHTML = "🎉 You win the match!";
    } else {
      result.innerHTML = "💀 Computer wins the match!";
    }
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;

    document.getElementById("play-again").style.display = "block";
  }

  document.getElementById("play-again").addEventListener("click", function () {
    location.reload();
  });
});
