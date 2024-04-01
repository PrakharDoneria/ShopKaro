// Dynamically adjust background size on window resize
window.addEventListener('resize', function() {
    const background = document.querySelector('.background');
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const aspectRatio = windowWidth / windowHeight;

    if (aspectRatio < 1) {
        background.style.width = '100%';
        background.style.height = 'auto';
    } else {
        background.style.width = 'auto';
        background.style.height = '100%';
    }
});
