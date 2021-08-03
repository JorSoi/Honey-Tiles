// Overlay Types (Mobile menu overlay, instructions overlay,)
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

const instructionsIcon = document.getElementById('instructions');
const instructionsOverlay = document.getElementById('instructions-overlay');
const instructionsButton = document.getElementById('instructions-button');

const settingsOverlay = document.getElementById('settings-overlay');

const rankingsOverlay = document.getElementById('rankings-overlay');

const gameOverOverlay = document.getElementById('game-over-overlay');

const difficultySlider = document.getElementById('difficulty');
const volumeSlider = document.getElementById('volume');


const rankingsComb = document.getElementById('rankings-comb');
const settingsComb = document.getElementById('settings-comb');
const instructionsComb = document.getElementById('instructions-comb');


function openMobileMenuOverlay () {
    mobileMenuOverlay.style.display = 'flex';
    clearInterval(interval);
}

function closeMobileMenuOverlay () {
    mobileMenuOverlay.style.display = 'none';
    interval = setInterval(pickRandomBox, 1000); 
}

function openInstructions (isNavButton) {
    instructionsOverlay.style.display = 'flex';
    if (isNavButton === true) {
        clearInterval(interval);
        document.getElementById('instructions-button-nav').style.display = 'block';
        document.getElementById('instructions-button-mobile').style.display = 'none';
        document.getElementById('instructions-button-init').style.display = 'none';
    } else {
        document.getElementById('instructions-button-nav').style.display = 'none';
        document.getElementById('instructions-button-init').style.display = 'none';
        document.getElementById('instructions-button-mobile').style.display = 'block';
        
    }
}

function closeInstructions (isNavButton) {
    instructionsOverlay.style.display = 'none';
    if (isNavButton === true && gameOverOverlay !== 'flex') {
        continueGame();
    }
}

function closeInstructionsInitializeGame () {
    instructionsOverlay.style.display = 'none';
    countdown();
}


function openSettings (isNavButton) {
    settingsOverlay.style.display = 'flex';
    if (isNavButton === true) {
        clearInterval(interval);
        document.getElementById('back-nav-settings').style.display = 'block';
        document.getElementById('back-mobile-settings').style.display = 'none';
    } else {
        document.getElementById('back-nav-settings').style.display = 'none';
        document.getElementById('back-mobile-settings').style.display = 'block';
    }
}


function closeSettings (isNavButton) {
    settingsOverlay.style.display = 'none';
    if (isNavButton === true) {
        continueGame();
    }
}

function openRankings (isNavButton) {
    rankingsOverlay.style.display = 'flex';
    if (isNavButton === true) {
        clearInterval(interval);
        document.getElementById('back-nav-rankings').style.display = 'block';
        document.getElementById('back-mobile-rankings').style.display = 'none';
    } else {
        document.getElementById('back-nav-rankings').style.display = 'none';
        document.getElementById('back-mobile-rankings').style.display = 'block';
    }
}

function closeRankings (isNavButton) {
    rankingsOverlay.style.display = 'none';
    if (isNavButton === true) {
        continueGame();
    }
}

function continueGame () {
    interval = setInterval(pickRandomBox, 1000); 
}



volumeSlider.addEventListener("input", (e) => {
    backgroundMusic.volume = volumeSlider.value;
})

instructionsOverlay.style.display = 'flex';
