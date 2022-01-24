function computerplay(){
    let option = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    return option[random];
}


function playRound(playerSelection){
    result.textContent = "";
    let computerSelection = computerplay();

    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            cScore.textContent++;
        } 
        if (computerSelection == "scissors") {
            pScore.textContent++;
        } 
    } 
        
    if (playerSelection == "paper") { 
        if (computerSelection == "rock") {
            pScore.textContent++;
        } 
        if (computerSelection == "scissors") {
            cScore.textContent++;
        } 
    } 

    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            cScore.textContent++;
        } 
        if (computerSelection == "paper") {
            pScore.textContent++;
        } 
    } 

    if ((cScore.textContent >= 5) || (pScore.textContent >= 5)) {
        if (cScore.textContent >= 5) {
            cScore.textContent = 0;
            pScore.textContent = 0;
            result.textContent = "computer wins";
        } else {
            cScore.textContent = 0;
            pScore.textContent = 0;
            result.textContent = "player wins";
        }
    }

    cScore.textContent = cScore.textContent;
    pScore.textContent = pScore.textContent;
};
let result = document.getElementById("resultText");
let cScore = document.getElementById("compScore");
let pScore = document.getElementById("playerScore");
let buttons = document.querySelectorAll("button");
    
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})