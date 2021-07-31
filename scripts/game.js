let i = 0;
let countColoredBoxes = 0;
let scoreCounter = 0;


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
        clearInterval(startInterval);
        setTimeout(tooManyRed, 1500);
    } else {
        countColoredBoxes = 0;
    }
};


// let startInterval = setInterval(pickRandomBox, 1000);

// Checks which DOM element has been triggered by a click event and compares if the clicked box matches the one colored by the computer.
function userClick (e) {
    if(e.target.id === `${i}` || e.target.id === `img${i}`){
        document.getElementById(`img${i}`).src = 'https://jorsoi.github.io/Honey-Tiles/assets/yellow.svg';
        console.log('You hit the target');
        scoreCounter += 1;
        console.log(scoreCounter);
        document.getElementById('score-number').innerHTML = scoreCounter;        
    } else {
        console.log('you missed the target');
        document.getElementById('game-over-overlay').style.display = 'flex';
        clearInterval(startInterval);
        window.removeEventListener('click', userClick)
        for(let k = 0; k < 24; k++) {
            document.getElementById(`img${k}`).src = 'https://jorsoi.github.io/Honey-Tiles/assets/red.svg';
        }
    }
}




// actions being initialized if there is more than 1 red button colored.
function tooManyRed () {
    document.getElementById('game-over-overlay').style.display = 'flex';
    window.removeEventListener('click', userClick);
}



window.addEventListener('click', userClick)


