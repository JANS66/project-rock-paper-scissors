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
    let humanChoice = prompt("Please enter rock, paper or scissors:");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    for (let i = 0; i <= 4; i++) {
        console.log(playRound());
        function playRound() {
            let humanChoice = getHumanChoice().toLowerCase();
            let computerChoice = getComputerChoice();

            if (humanChoice === computerChoice) {
                return "Tie!";
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
    }
}

console.log(playGame());