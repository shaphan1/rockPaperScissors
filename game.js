function computerplay(){
    let option = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    return option[random];
}


function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            computerScore++;
            return "you loose! paper beats rock";
        } 
        if (computerSelection == "rock") {
            return "A Draw";
        } 
        if (computerSelection == "scissors") {
            playerScore++;
            return "you win! rock beats scissors";
        } 
    } 
        
    if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            return "A Draw";
        } 
        if (computerSelection == "rock") {
            playerScore++;
            return "you win! paper beats rock";
        } 
        if (computerSelection == "scissors") {
            computerScore++;
            return "you loose! scissors beats paper";
        } 
    } 

    if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            playerScore++;
            return "you win! scissors beats paper";
        } 
        if (computerSelection == "rock") {
            computerScore++;
            return "you loose! rock beats scissors";
        } 
        if (computerSelection == "paper") {
            return "A Draw";
        } 
    } 
};

let userInput;
let playerScore = 0;
let computerScore = 0;

function game(){
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerplay();
        let playerSelection = prompt("pick rock, paper or scissors", userInput);
        console.log(playRound(playerSelection, computerSelection));
        console.log(playerScore, computerScore);
    }

    if (playerScore > computerScore) {
        console.log("you win");
        
    } else if(computerScore > playerScore){
        console.log("you loose");
    }
    else{
        console.log("a draw");
    }

}

game();