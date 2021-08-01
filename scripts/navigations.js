// Overlay Types (Mobile menu overlay, instructions overlay,)
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

const instructionsIcon = document.getElementById('instructions');
const instructionsOverlay = document.getElementById('instructions-overlay');
const instructionsButton = document.getElementById('instructions-button');

const settingsOverlay = document.getElementById('settings-overlay');

const gameOverOverlay = document.getElementById('game-over-overlay');

const difficultySlider = document.getElementById('difficulty');
const volumeSlider = document.getElementById('volume');
const backgroundMusic = document.getElementById('background-music');

const rankingsComb = document.getElementById('rankings-comb');
const playCombMenu = document.querySelector('.play-comb-menu');
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

function openInstructions () {
    instructionsOverlay.style.display = 'flex';
}

function closeInstructions () {
    instructionsOverlay.style.display = 'none';
    clickPlay();
}


function openSettings () {
    settingsOverlay.style.display = 'flex';
}


function closeSettings () {
    settingsOverlay.style.display = 'none';
}





hamburgerMenu.addEventListener('click', openMobileMenuOverlay);
playCombMenu.addEventListener('click', closeMobileMenuOverlay);
instructionsComb.addEventListener('click', openInstructions);
instructionsIcon.addEventListener('click', openInstructions);
instructionsButton.addEventListener('click', closeInstructions);


// document.getElementById('settings-overlay').style.display = 'flex';

document.getElementById('background-music').volume = 0.5;


volumeSlider.addEventListener("input", (e) => {
    backgroundMusic.volume = volumeSlider.value;
})