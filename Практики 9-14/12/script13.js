document.addEventListener('DOMContentLoaded', function() {
    var parallaxLayer = document.querySelector('.parallax-layer');

    window.addEventListener('scroll', function() {
        var yOffset = window.pageYOffset;
        parallaxLayer.style.transform = 'translate3d(0, ' + yOffset * 1.7 + 'px, 0)';
    });
});