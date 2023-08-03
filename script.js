let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

const playerSelection = () => {
  let playerChoice = prompt(
    "Type your choice (Rock/Paper/Scissors)\nor\nType Exit or press Cancel to quit the game"
  );

  if (playerChoice === "exit" || playerChoice === null) {
    alert("You have exited the game!");
    return "exit";
  }

  while (!choices.includes(playerChoice.toLowerCase())) {
    playerChoice = prompt(
      "You've typed the wrong choice.\nPlease type your choice (Rock/Paper/Scissors)\ntype Exit or press Cancel to quit the game"
    ).toLowerCase();

    if (playerChoice === "exit" || playerChoice === null) {
      alert("You have exited the game!");
      return "exit";
    }
  }

  return playerChoice;
};

const computerSelection = () => {
  const getRandomIndex = Math.floor(Math.random() * choices.length);

  return choices[getRandomIndex];
};

const playRound = (player, computer) => {
  if (player === computer) {
    alert("It's a tie! Try again.");
    return "tie";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    alert(`You win! ${player} beats ${computer}.`);
    return "player";
  } else {
    alert(`You lose! ${computer} beats ${player}.`);
    return "computer";
  }
};

const game = () => {
  for (let round = 1; round <= 5; round++) {
    alert(`Round ${round}`);

    const playerChoice = playerSelection();
    alert(`You chose: ${playerChoice}`);

    const computerChoice = computerSelection();
    alert(`Computer chose: ${computerChoice}`);

    let result = playRound(playerChoice, computerChoice);

    while (result === "tie") {
      const playerChoice = playerSelection();
      alert(`You chose: ${playerChoice}`);

      const computerChoice = computerSelection();
      alert(`Computer chose: ${computerChoice}`);

      result = playRound(playerChoice, computerChoice);

      return;
    }

    if (result === "player") {
      playerScore++;
    } else if (result === "computer") {
      computerScore++;
    }

    alert(
      `Round ${round} standing:\nYou: ${playerScore}\nComputer: ${computerScore}`
    );
  }

  playerScore > computerScore
    ? alert("Congratulations! You win the game!")
    : alert("Computer wins! Better luck next time.");
};

game();
