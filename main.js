function printFinalResult() {
    if (humanScore > computerScore) {
        const gameResult = document.createElement("p");
        gameResult.textContent = "You win the game!";
        resultDiv.appendChild(gameResult);
    } else if (humanScore < computerScore) {
        const gameResult = document.createElement("p");
        gameResult.textContent = "Computer wins the game!";
        resultDiv.appendChild(gameResult);
    } else {
        const gameResult = document.createElement("p");
        gameResult.textContent = "The game is a tie!";
        resultDiv.appendChild(gameResult);
    }
}

function printResult() {
    const result = document.createElement("p");
    result.textContent = `Human ${humanScore} - ${computerScore} Computer`;
    resultDiv.appendChild(result);
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

const resultDiv = document.querySelector("#result-div");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    let winner = determineWinner(humanChoice, computerChoice);
    if (winner === "tie") {
        const result = document.createElement("p");
        result.textContent = `Round is a tie! Both chose ${humanChoice}`;
        resultDiv.appendChild(result);
    } else if (winner === "human") {
        humanScore++;
        const result = document.createElement("p");
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        resultDiv.appendChild(result);
    } else {
        computerScore++;
        const result = document.createElement("p");
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        resultDiv.appendChild(result);
    }
    console.log(printResult());
}

function playGame() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            const value = event.target.id;
            playRound(value);
        });
    });
};

playGame();