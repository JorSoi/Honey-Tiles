AOS.init();

const image3 = document.getElementById('layer-3');
const image2 = document.getElementById('layer-2');
const image3_mobile = document.getElementById('layer-3-mobile');
const image2_mobile = document.getElementById('layer-2-mobile');
const logo = document.querySelector('.logo-container');


window.addEventListener('scroll', function parallaxEffect () {

    let scrollValue = window.scrollY;
    image3.style.transform = `translateY(${0.6 * scrollValue}px)`;
    image2.style.transform = `translateY(${0.5 * scrollValue}px)`;
    image3_mobile.style.transform = `translateY(${0.6 * scrollValue}px)`;
    image2_mobile.style.transform = `translateY(${0.45 * scrollValue}px)`;
    logo.style.transform = `translateY(${0.6 * scrollValue}px)`;
})
