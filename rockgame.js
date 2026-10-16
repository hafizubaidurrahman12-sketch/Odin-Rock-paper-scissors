let compscore = 0;
let humscore = 0;
let round = 1;


const rockBtn = document.querySelector('.box1');
const paperBtn = document.querySelector('.box2');
const scissorsBtn = document.querySelector('.box3');

const humScoreDisplay = document.querySelector('.Htext');
const cpuScoreDisplay = document.querySelector('.image');
const resultDisplay = document.querySelector('.container2');
const playAgainBtn = document.querySelector('.ctabutton');


function comptake() {
    let comp = Math.random();
    if (comp < 0.33) {
        return "rock";
    } else if (comp < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


function playRound(hum) {
    // Stop game if 5 rounds are already completed
    if (round > 5) {
        resultDisplay.textContent = "Game over! Click 'play again' to restart.";
        return;
    }

    const comp = comptake();

    if (hum === comp) {
        resultDisplay.textContent = `round#${round}: computer choose: ${comp} __draw`;
    } 
    else if (hum === "rock" && comp === "paper") {
        compscore++;
        resultDisplay.textContent = `round#${round}: computer choose: ${comp} __computer win! CPU score: ${compscore}`;
    } 
    else if (hum === "rock" && comp === "scissors") {
        humscore++;
        resultDisplay.textContent = `round#${round}: computer choose: ${comp} __human win! your score: ${humscore}`;
    } 
    else if (hum === "paper" && comp === "rock") {
        humscore++;
        resultDisplay.textContent = `round#${round}: computer choose: ${comp} __human win! your score: ${humscore}`;
    } 
    else if (hum === "paper" && comp === "scissors") {
        compscore++;
        resultDisplay.textContent = `round#${round}: computer choose: ${comp} __computer win! CPU score: ${compscore}`;
    } 
    else if (hum === "scissors" && comp === "rock") {
        compscore++;
        resultDisplay.textContent = `round#${round}: computer choose: ${comp} __computer win! CPU score: ${compscore}`;
    } 
    else if (hum === "scissors" && comp === "paper") {
        humscore++;
        resultDisplay.textContent = `round#${round}: computer choose: ${comp} __human win! your score: ${humscore}`;
    }

   
    humScoreDisplay.textContent = `human score: ${humscore}`;
    cpuScoreDisplay.textContent = `CPU score: ${compscore}`;

    round++;

    
    if (round > 5) {
        if (compscore === humscore) {
            resultDisplay.textContent += ` | It's a draw! Final score - You: ${humscore} : CPU: ${compscore}`;
        } else if (compscore < humscore) {
            resultDisplay.textContent += ` | You win the match! Final score - You: ${humscore} : CPU: ${compscore}`;
        } else {
            resultDisplay.textContent += ` | Computer wins the match! Final score - You: ${humscore} : CPU: ${compscore}`;
        }
    }
}


rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));


playAgainBtn.addEventListener('click', () => {
    compscore = 0;
    humscore = 0;
    round = 1;
    humScoreDisplay.textContent = "human score";
    cpuScoreDisplay.textContent = "CPU score";
    resultDisplay.textContent = '"The winner is:"';
});
