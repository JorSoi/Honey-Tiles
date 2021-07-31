const scoreNumber = document.querySelectorAll('.score-number');



let i = 0;
let countColoredBoxes = 0;
let scoreCounter = 0;
let highScoreCounter = 0;


// Fill one of the boxes in the given color randomly 
function pickRandomBox() {
    i = Math.floor(Math.random()*23);
    document.getElementById(`img${i}`).src = 'https://jorsoi.github.io/Honey-Tiles/assets/red.svg';
    

    // Counts how many boxes are styled red after each interval and stops the game if user has skipped the previous box.
    for(let f = 0; f < 24; f++) {
        if(document.getElementById(`img${f}`).src === 'https://jorsoi.github.io/Honey-Tiles/assets/red.svg') {
            countColoredBoxes += 1;
        }
    }

    if(countColoredBoxes > 1) {
        console.log('you were too slow');
        document.querySelector('.game-over-p').innerHTML = "Oh dear! ... You have probably overseen a tile. Let's try it again! 🐝";
        setTimeout(gameOver, 1500);
    } else {
        countColoredBoxes = 0;
    }
};


// let startInterval = setInterval(pickRandomBox, 2000);

// Checks which DOM element has been triggered by a click event and compares if the clicked box matches the one colored by the computer.
function userClick (e) {
    if(e.target.id === `${i}` || e.target.id === `img${i}`){
        document.getElementById(`img${i}`).src = 'https://jorsoi.github.io/Honey-Tiles/assets/yellow.svg';
        console.log('You hit the target');
        scoreCounter += 1;
        // if (highScoreCounter <= scoreCounter) {
        //     highScoreCounter = scoreCounter;
        //     document.getElementById('highscore-number').innerHTML = highScoreCounter;
        // } else {
        //     document.getElementById('highscore-number').innerHTML = highScoreCounter; 
        // }
        console.log(scoreCounter);
        scoreNumber.forEach(a => {a.innerHTML = `${scoreCounter}`});        
    } else {
        document.querySelector('.game-over-p').innerHTML = "Oupsi... You have pressed the wrong tile. Let's try it again! 🐝";
        console.log('you missed the target');
        setTimeout(gameOver, 1500);
    }
}




// actions being initialized if there is more than 1 red button colored.
function gameOver () {
    document.getElementById('game-over-overlay').style.display = 'flex';
    window.removeEventListener('click', userClick);
    clearInterval(startInterval);
}



window.addEventListener('click', userClick);


