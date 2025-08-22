function getComputerChoice() {
    let choice = Math.floor(Math.random() * 100);
    choice = choice % 3;
    if (choice == 0) return "rock";
    else if (choice == 1) return "paper";
    else return "scissor";
}

const computerSelection = getComputerChoice();
