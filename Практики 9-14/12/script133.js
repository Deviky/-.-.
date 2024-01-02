document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');

    function updateContentOnScroll() {
        const scrollPosition = window.scrollY;

        // Your logic for updating content based on scroll position
        if (scrollPosition > 200) {
            content.classList.add('highlight');
        } else {
            content.classList.remove('highlight');
        }
    }

    function handleScroll() {
        requestAnimationFrame(updateContentOnScroll);
    }

    // Listen for the scroll event
    window.addEventListener('scroll', handleScroll);

    // Call updateContentOnScroll once to handle initial state
    updateContentOnScroll();
});