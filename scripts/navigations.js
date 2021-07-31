// Overlay Types (Mobile menu overlay, instructions overlay,)
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

const instructionsIcon = document.getElementById('instructions');
const instructionsOverlay = document.getElementById('instructions-overlay');
const instructionsButton = document.getElementById('instructions-button');

const gameOverOverlay = document.getElementById('game-over-overlay');

const rankingsComb = document.getElementById('rankings-comb');
const playComb = document.getElementById('play-comb');
const settingsComb = document.getElementById('settings-comb');
const instructionsComb = document.getElementById('instructions-comb');


function openMobileMenuOverlay () {
    mobileMenuOverlay.style.display = 'flex';
}

function clickPlay () {
    mobileMenuOverlay.style.display = 'none';
    gameOverOverlay.style.display = 'none';
}

function clickInstructions () {
    instructionsOverlay.style.display = 'flex';
}

function closeInstructions () {
    instructionsOverlay.style.display = 'none';
    clickPlay();
}







hamburgerMenu.addEventListener('click', openMobileMenuOverlay);
playComb.addEventListener('click', clickPlay);
instructionsComb.addEventListener('click', clickInstructions);
instructionsIcon.addEventListener('click', clickInstructions);
instructionsButton.addEventListener('click', closeInstructions);