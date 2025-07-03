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
                console.log("Tie!");
                return `Human ${humanScore} - ${computerScore} Computer`;
            } else if (humanChoice === "rock" && computerChoice === "scissors") {
                humanScore++;
                console.log("You win! Rock beats scissors");
                return `Human ${humanScore} - ${computerScore} Computer`;
            } else if (humanChoice === "rock" && computerChoice === "paper") {
                computerScore++;
                console.log("You lose! Paper beats rock");
                return `Human ${humanScore} - ${computerScore} Computer`;
            } else if (humanChoice === "paper" && computerChoice === "rock") {
                humanScore++;
                console.log("You win! Paper beats rock");
                return `Human ${humanScore} - ${computerScore} Computer`;
            } else if (humanChoice === "paper" && computerChoice === "scissors") {
                computerScore++;
                console.log("You lose! Scissors beat paper");
                return `Human ${humanScore} - ${computerScore} Computer`;
            } else if (humanChoice === "scissors" && computerChoice === "rock") {
                computerScore++;
                console.log("You lose! Rock beat scissors");
                return `Human ${humanScore} - ${computerScore} Computer`;
            } else if (humanChoice === "scissors" && computerChoice === "paper") {
                humanScore++;
                console.log("You win! Scissors beat paper");
                return `Human ${humanScore} - ${computerScore} Computer`;
            }
        }
    }
}

console.log(playGame());