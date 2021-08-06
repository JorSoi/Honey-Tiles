const difficultySlider = document.getElementById('difficulty');
const scoreNumber = document.querySelectorAll('.score-number');
const errorSound = new Audio('assets/error.mp3');
const clickSound = new Audio('assets/click.mp3');
const countDownSound = new Audio('assets/countdownSound.wav');
let i = 0;
let countColoredBoxes = 0;
let scoreCounter = 0;
let highScoreCounter = 0;
let interval;
let difficultyLevel = parseInt(difficultySlider.value, 10);



// Fill one of the boxes in the given color randomly.
function pickRandomBox() {
    i = Math.floor(Math.random()*23);
    document.getElementById(`img${i}`).src = 'https://jorsoi.github.io/Honey-Tiles/assets/red.svg';
    checkRedBoxCount();
}



// Ensures only one box is colored red, else gameover.
function checkRedBoxCount () {
    for(let f = 0; f < 24; f++) {
        if(document.getElementById(`img${f}`).src === 'https://jorsoi.github.io/Honey-Tiles/assets/red.svg') {
            countColoredBoxes += 1;
        }
    }

    if(countColoredBoxes > 1) {
        console.log('you were too slow');
        document.querySelector('.game-over-p').innerHTML = "Oh dear! ... You have probably overseen a tile. Let's try it again! 🐝";
        gameOver();
    } else {
        countColoredBoxes = 0;
    }
}


// Check which DOM element got triggered and compares it to colored tile.
function checkUserClick (combId) {
    clickSound.play();
    if(combId === i ){
        document.getElementById(`img${i}`).src = 'https://jorsoi.github.io/Honey-Tiles/assets/yellow.svg';
        console.log('You hit the target');
        scoreCounter += 1;
        scoreNumber.forEach(a => {a.innerHTML = `${scoreCounter}`}); 
        checkIfHighscore();
        checkForDifficultyIncrease();
    } else {
        document.querySelector('.game-over-p').innerHTML = "Oupsi... You have pressed something wrong. Let's try it again! 🐝";
        console.log('you did not hit the target');
        gameOver();
    }
}





 

// Initializes Game.
function startGame () {

    applyDifficulty(difficultyLevel);
    
}




// actions being initialized if there is more than 1 red button colored.
function gameOver () {
    
    setTimeout(() => {
        document.getElementById('game-over-overlay').style.display = 'flex';
        errorSound.play();
    }, 1000);
    clearInterval(interval);
}

// Reset tile-colors and game score and clears interval after each game.
function resetPreviousGame () {
    clearInterval(interval);
    countColoredBoxes = 0;
    for (let d = 0; d < 24; d++) {
        document.getElementById(`img${d}`).src = 'https://jorsoi.github.io/Honey-Tiles/assets/yellow.svg';
    }
    scoreCounter = 0;
    scoreNumber.forEach(a => {a.innerHTML = `${scoreCounter}`}); 
}

// If current score > highscore make current score highscore.
function checkIfHighscore () {
        if (highScoreCounter <= scoreCounter) {
            highScoreCounter = scoreCounter;
            document.getElementById('highscore-number').innerHTML = highScoreCounter;
            document.getElementById('this-user-highscore').innerHTML = highScoreCounter;
        } else {
            document.getElementById('highscore-number').innerHTML = highScoreCounter; 
            document.getElementById('this-user-highscore').innerHTML = highScoreCounter;
        }
}

function countdown () {
    resetPreviousGame();
    document.getElementById('game-countdown-overlay').style.display = 'flex';
    document.getElementById('game-over-overlay').style.display = 'none';
    countDownSound.play();
    let countDownwards = 3;
    document.getElementById('countdown-number').innerHTML = countDownwards;
    let countdownInterval = setInterval(() => {
        if(countDownwards > 1) {
            countDownwards -=1;
            document.getElementById('countdown-number').innerHTML = countDownwards;
        } else {
            clearInterval(countdownInterval);
            document.getElementById('game-countdown-overlay').style.display = 'none';
            startGame();
        }
    }, 1000) 
}



function intervalSpeed (speed) {
    interval = setInterval(pickRandomBox, speed)
}

difficultySlider.addEventListener("change", (e) => {
    difficultyLevel = parseInt(e.target.value, 10);
})

function checkForDifficultyIncrease () {
    switch (scoreCounter) {
        case 5:
            applyDifficulty(difficultyLevel + 1);
            break;
        case 10:
            applyDifficulty(difficultyLevel + 2);
            break;
        case 15:
            applyDifficulty(difficultyLevel + 3);
            break;
        case 20:
            applyDifficulty(difficultyLevel + 4);
            break;
        case 25:
            applyDifficulty(difficultyLevel + 5);
            break;
        case 30:
            applyDifficulty(difficultyLevel + 6);
            break;
        case 35:
            applyDifficulty(difficultyLevel + 7);
            break;
        case 40:
            applyDifficulty(difficultyLevel + 8);
            break;
        case 45:
            applyDifficulty(difficultyLevel + 9);
            break;
        case 50:
            applyDifficulty(difficultyLevel + 10);
            break;
        case 55:
            applyDifficulty(difficultyLevel + 11);
            break;
        case 60:
            applyDifficulty(difficultyLevel + 12);
            break;
        case 45:
            applyDifficulty(difficultyLevel + 13);
            break;
    }
}

function applyDifficulty (no) {
    switch (no) {
        case 0:
            clearInterval(interval);
            intervalSpeed(2500);
            break;
        case 1:
            clearInterval(interval);
            intervalSpeed(2400);
            break;
        case 2:
            clearInterval(interval);
            intervalSpeed(2300);
            break;
        case 3:
            clearInterval(interval);
            intervalSpeed(2200);
            break;
        case 4:
            clearInterval(interval);
            intervalSpeed(2100);
            break;
        case 5:
            clearInterval(interval);
            intervalSpeed(2000);
            break;
        case 6:
            clearInterval(interval);
            intervalSpeed(1900);
            break;
        case 7:
            clearInterval(interval);
            intervalSpeed(1800);
            break;
        case 8:
            clearInterval(interval);
            intervalSpeed(1700);
            break;
        case 9:
            clearInterval(interval);
            intervalSpeed(1600);
            break;
        case 10:
            console.log('Difficulty 10 was sucessfully applied')
            clearInterval(interval);
            intervalSpeed(1500);
            break;
        case 11:
            clearInterval(interval);
            intervalSpeed(1400);
            break;
        case 12:
            clearInterval(interval);
            intervalSpeed(1300);
            break;
        case 13:
            clearInterval(interval);
            intervalSpeed(1200);
            break;
        case 14:
            clearInterval(interval);
            intervalSpeed(1100);
            break;
        case 15:
            clearInterval(interval);
            intervalSpeed(1000);
            break;
        case 16:
            clearInterval(interval);
            intervalSpeed(950);
            break;
        case 17:
            clearInterval(interval);
            intervalSpeed(900);
            break;
        case 18:
            clearInterval(interval);
            intervalSpeed(850);
            break;
        case 19:
            clearInterval(interval);
            intervalSpeed(800);
            break;
        case 20:
            clearInterval(interval);
            intervalSpeed(750);
            break;
        case 21:
            clearInterval(interval);
            intervalSpeed(700);
            break;
        case 22:
            clearInterval(interval);
            intervalSpeed(650);
            break;
        case 23:
            clearInterval(interval);
            intervalSpeed(600);
            break;
        case 24:
            clearInterval(interval);
            intervalSpeed(575);
            break;  
        case 25:
            clearInterval(interval);
            intervalSpeed(550);
            break;  
        case 26:
            clearInterval(interval);
            intervalSpeed(525);
            break;
        case 27:
            clearInterval(interval);
            intervalSpeed(500);
            break;
        case 28:
            clearInterval(interval);
            intervalSpeed(475);
            break;
        case 29:
            clearInterval(interval);
            intervalSpeed(450);
            break;  
        case 30:
            clearInterval(interval);
            intervalSpeed(425);
            break;                 
    }
}