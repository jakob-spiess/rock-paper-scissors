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
    if (humanChoice === "rock") {
        return humanChoice;
    } else if (humanChoice === "paper") {
        return humanChoice;
    } else {
        return "scissors";
    }
}
console.log((getHumanChoice()));