function getComputerChoice() {
    let choice = Math.floor(Math.random() * 100);
    choice = choice % 3;
    if (choice == 0) return "rock";
    else if (choice == 1) return "paper";
    else return "scissor";
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

function playGame() {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
}





// DOM section

const body = document.querySelector("body");

const rock = document.createElement("button");
rock.textContent = "rock";
body.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "paper";
body.appendChild(paper);

const scissor = document.createElement("button");
scissor.textContent = "scissor";
body.appendChild(scissor);

// rock.addEventListener("click", () => {
//     playRound("rock", getComputerChoice());
// });

// paper.addEventListener("click", () => {
//     playRound("paper", getComputerChoice());
// });

// scissor.addEventListener("click", () => {
//     playRound("scissor", getComputerChoice);
// });

const div = document.createElement("div");
div.classList.add("score");
body.appendChild(div);

body.addEventListener("click", (e) => {
    let selected = e.target;

    switch (selected.textContent) {
        case 'rock':
            playRound("rock", getComputerChoice());
            break;
        case 'paper':
            playRound("paper", getComputerChoice());
            break;
        case 'scissor':
            playRound("scissor", getComputerChoice);
            break;
    }
    div.textContent = `Human Score :${humanScore}` + ` Vs. ` + `Computer Score :${computerScore}`;

    if (humanScore >= 5 || computerScore >= 5) {
        div.textContent = humanScore > computerScore ? '\n you win' : '\n computer wins'
    }

});