var heading = document.querySelector('h1');
if (heading) {
    heading.addEventListener('mouseenter', function () {
        this.style.color = '#ff00ff';
        this.style.textShadow = '0 0 30px rgba(255, 0, 255, 0.8), 0 0 60px rgba(255, 0, 255, 0.5)';
    });
    heading.addEventListener('mouseout', function () {
        this.style.color = '';
        this.style.textShadow = '';
    });
}

// Add fade-in effect on page load
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(function() {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 50);
});