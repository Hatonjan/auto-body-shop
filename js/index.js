// Initialize the AOS animations
AOS.init({
    offset: 120, // triggers 120px before element enters view
    duration: 1000,
    once: false, // allow animation every time it scrolls into view
    mirror: false // disable animation on scroll up
});


// Event listener to create a text animation in reference with the hero video
const video = document.getElementById('heroVideo');
const h2 = document.querySelector('.hero h2');
video.addEventListener('play', () => {
    setTimeout(() => {
    h2.classList.add('reveal');
    }, 7200);
});

