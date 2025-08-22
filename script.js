function getComputerChoice() {
    let choice = Math.floor(Math.random() * 100);
    choice = choice % 3;
    if (choice == 0) return "rock";
    else if (choice == 1) return "paper";
    else return "scissor";
}

function getHumanChoice() {
    let choice = prompt("Enter your choice :");
    choice = choice.toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("This a draw");
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissor') {
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === 'scissor' && computerChoice === 'paper') {
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

let humanScore = 0;
let computerScore = 0;

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(humanSelection, computerSelection);

