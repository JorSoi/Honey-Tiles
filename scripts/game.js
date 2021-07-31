const scoreNumber = document.querySelectorAll('.score-number');
let i = 0;
let countColoredBoxes = 0;
let scoreCounter = 0;
let highScoreCounter = 0;
let interval;





// Fill one of the boxes in the given color randomly.
function pickRandomBox() {
    i = Math.floor(Math.random()*23);
    document.getElementById(`img${i}`).src = 'https://jorsoi.github.io/Honey-Tiles/assets/red.svg';
    checkRedBoxCount();
    console.log(interval);
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
    if(combId === i ){
        document.getElementById(`img${i}`).src = 'https://jorsoi.github.io/Honey-Tiles/assets/yellow.svg';
        console.log('You hit the target');
        scoreCounter += 1;
        scoreNumber.forEach(a => {a.innerHTML = `${scoreCounter}`}); 
        checkIfHighscore();
    } else {
        document.querySelector('.game-over-p').innerHTML = "Oupsi... You have pressed something wrong. Let's try it again! 🐝";
        console.log('you did not hit the target');
        gameOver();
    }
}


// Initializes Game.
function startGame () {
    resetPreviousGame();
    interval = setInterval(pickRandomBox, 1000); 
    document.getElementById('game-over-overlay').style.display = 'none';
}




// actions being initialized if there is more than 1 red button colored.
function gameOver () {
    
    setTimeout(() => {document.getElementById('game-over-overlay').style.display = 'flex'}, 1000);
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
        } else {
            document.getElementById('highscore-number').innerHTML = highScoreCounter; 
        }
}

function countdown () {
    document.getElementById('game-countdown-overlay').style.display = 'flex';
    let countDownwards = 3;
    let countdownInterval = setInterval(() => {
        if(countDownwards > 1) {
            countDownwards -=1;
            document.getElementById('countdown-number').innerHTML = countDownwards;
        } else {
            clearInterval(countdownInterval);
            document.getElementById('game-countdown-overlay').style.display = 'none';
            startGame();
        }
    }, 1300) 
}

countdown();


