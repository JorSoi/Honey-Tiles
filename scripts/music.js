const backgroundMusic = document.getElementById('background-music');
const childMode = document.getElementById('child-mode');
const adultMode = document.getElementById('adult-mode');
const kermitStripper = document.getElementById('kermit-stripper');


function activateChildMode() {
    kermitStripper.style.display = 'none';
    backgroundMusic.src="assets/childMode.mp3";
    adultMode.style.opacity = '0.5';
    childMode.style.opacity = '1';
}

function activateAdultMode() {
    if(window.innerWidth > 1520) {
        kermitStripper.style.display = 'block';
    } else {
        kermitStripper.style.display = 'none';
    }
    backgroundMusic.src="assets/adultMode.mp3"
    adultMode.style.opacity = '1';
    childMode.style.opacity = '0.5';
}

window.onresize = () => {    if(window.innerWidth > 1520 && backgroundMusic.src === "assets/adultMode.mp3") {
    kermitStripper.style.display = 'block';
} else {
    kermitStripper.style.display = 'none';
}}



backgroundMusic.volume = 0.5;
activateChildMode();