function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Please enter rock, paper or scissors:").toLowerCase();
    while (!["rock", "paper", "scissors"].includes(humanChoice)) {
        humanChoice = prompt("Invalid input. Please enter rock, paper, or scissors:").toLowerCase();
    }

    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Tie !";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win! Rock beats scissors";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "You lose! Paper beats rock";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! Paper beats rock";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "You lose! Scissors beat paper";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "You lose! Rock beat scissors";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win! Scissors beat paper";
    }
}

function printResult() {
    return `Human ${humanScore} - ${computerScore} Computer`;
}

function printFinalResult() {
    if (humanScore > computerScore) {
        return "You win the game!";
    } else if (humanScore < computerScore) {
        return "Computer wins the game!";
    } else {
        return "The game is a tie!";
    }
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log(determineWinner(humanChoice, computerChoice));
    console.log(printResult());
}

function playGame() {
    for (let i = 0; i <= 4; i++) {
        playRound();
    }
    console.log(printFinalResult());
}

playGame();