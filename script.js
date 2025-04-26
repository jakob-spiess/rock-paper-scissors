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

        //console.log(`Computer chose ${computerChoice}`);
        //console.log(`Human chose ${humanChoice}`);

        const currIter = document.createElement('ul');
        const compChoice = document.createElement('li');
        const humChoice = document.createElement('li');
        compChoice.textContent = `Computer chose ${computerChoice}`;
        humChoice.textContent = `Human chose ${humanChoice}`;
        currIter.appendChild(compChoice);
        currIter.appendChild(humChoice);

        let textHolder;
        if (humanChoice === computerChoice) {
            textHolder = document.createElement('li');
            textHolder.textContent = "It's a tie";
            currIter.appendChild(textHolder);
            //console.log("It's a tie");
        }
        else if (((humanChoice === "rock") && (computerChoice === "scissors")) ||
                ((humanChoice === "paper") && (computerChoice === "rock")) ||
                ((humanChoice === "scissors") && (computerChoice === "paper"))) {
                    humanScore++;
                    textHolder = document.createElement('li');
                    textHolder.textContent = "Human wins";
                    currIter.appendChild(textHolder);
                    //console.log("Human wins");
        } else {
            computerScore++;
            textHolder = document.createElement('li');
            textHolder.textContent = "Computer wins";
            currIter.appendChild(textHolder);
            //console.log("Computer wins");
        }
        textHolder = document.createElement('li');
        textHolder.textContent = `Human score ${humanScore}, Computer Score: ${computerScore}`;
        currIter.appendChild(textHolder);
        //console.log(`Human score ${humanScore}, Computer Score: ${computerScore}`);
        let winnerDisplay;
        if (humanScore === 5) {
            winnerDisplay = document.createElement('h3');
            winnerDisplay.innerText = "The winner is the human!";
            currIter.appendChild(winnerDisplay);
        } else if (computerScore === 5) {
            winnerDisplay = document.createElement('h3');
            winnerDisplay.innerText = "The winner is the computer!";
            currIter.appendChild(winnerDisplay);
        }
        results.appendChild(currIter);
    }

    let humanChoice;
    let computerChoice;
    
    //Instead of automatic methods get buttons & listeners
    //humanChoice = getHumanChoice();
    const menu = document.createElement('div');
    const rockBtn = document.createElement('button');
    rockBtn.setAttribute("id", "rock");
    const paperBtn = document.createElement('button');
    paperBtn.setAttribute("id", "paper"); 
    const scissorsBtn = document.createElement('button');
    scissorsBtn.setAttribute("id", "scissors");
    rockBtn.textContent = "ROCK";
    paperBtn.textContent = "PAPER";
    scissorsBtn.textContent = "SCISSORS";
    menu.appendChild(rockBtn);
    menu.appendChild(paperBtn);
    menu.appendChild(scissorsBtn);
    const body = document.querySelector("body");
    body.appendChild(menu);

    const results = document.createElement('div');
    results.setAttribute("id", "results");
    body.appendChild(results);

    menu.addEventListener('click', (e) => {
        let target = e.target;

        switch(target.id) {
            case "rock":
                humanChoice = "rock";
                break;
            case "paper":
                humanChoice = "paper";
                break;
            case "scissors":
                humanChoice = "scissors";
                break;
        }
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
    
    /*
    if(humanScore > computerScore) {
        console.log("The human wins the game.");
    } else if (computerScore > humanScore) {
        console.log("The computer wins the game.");
    } else {
        console.log("The game is a tie.")
    }
    */
}

playGame();