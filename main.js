function printFinalResult() {
    if (humanScore > computerScore) {
        return "You win the game!";
    } else if (humanScore < computerScore) {
        return "Computer wins the game!";
    } else {
        return "The game is a tie!";
    }
}

function printResult() {
    return `Human ${humanScore} - ${computerScore} Computer`;
}

let humanScore = 0;
let computerScore = 0;

function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "tie";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        return "human";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        return "computer";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return "human";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        return "computer";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        return "computer";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        return "human";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Please enter rock, paper or scissors:").toLowerCase();
    while (!["rock", "paper", "scissors"].includes(humanChoice)) {
        humanChoice = prompt("Invalid input. Please enter rock, paper, or scissors:").toLowerCase();
    }

    return humanChoice;
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let winner = determineWinner(humanChoice, computerChoice);
    if (winner === "tie") {
        console.log(`Round is a tie! Both chose ${humanChoice}`);
    } else if (winner === "human") {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    console.log(printResult());
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    console.log(printFinalResult());
}

playGame();