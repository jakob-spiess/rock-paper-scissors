function getComputerChoice() {
    let value = Math.floor(Math.random()*3)+1;
    if(value === 1) {
        return "rock";
    }
    else if (value === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
function getHumanChoice() {
    let humanChoice = prompt("What is your choice? If it is not known we will use scissors.");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock") {
        return humanChoice;
    } else if (humanChoice === "paper") {
        return humanChoice;
    } else {
        return "scissors";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        console.log(`Computer chose ${computerChoice}`);
        console.log(`Human chose ${humanChoice}`);

        if (humanChoice === computerChoice) {
            console.log("It's a tie");
        }
        else if (((humanChoice === "rock") && (computerChoice === "scissors")) ||
                ((humanChoice === "paper") && (computerChoice === "rock")) ||
                ((humanChoice === "scissors") && (computerChoice === "paper"))) {
                    humanScore++;
                    console.log("Human wins");
        } else {
            computerScore++;
            console.log("Computer wins");
        }
        console.log(`Human score ${humanScore}, Computer Score: ${computerScore}`);
    }

    let humanChoice;
    let computerChoice;
    for(let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if(humanScore > computerScore) {
        console.log("The human wins the game.");
    } else if (computerScore > humanScore) {
        console.log("The computer wins the game.");
    } else {
        console.log("The game is a tie.")
    }
}

playGame();