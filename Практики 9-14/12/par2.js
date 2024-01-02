(function() {
    const elem = document.querySelector("#parallax");

    // Update parallax on mouse move
    document.addEventListener("mousemove", parallax);

    // Update parallax on scroll
    window.addEventListener("scroll", parallax);

    // Smooth scroll on mouse wheel
    document.addEventListener("wheel", smoothScroll);

    function parallax(e) {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX || window.innerWidth / 2;
        let _mouseY = e.clientY || window.innerHeight / 2;
        let _scrollY = window.scrollY || window.pageYOffset;

        // Adjust parallax effect based on mouse and scroll positions
        let _depth1 = `${50 - (_mouseX - _w) * 0.02 + _scrollY * 0.02}% ${50 - (_mouseY - _h) * 0.02 + _scrollY * 0.02}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.04 + _scrollY * 0.04}% ${50 - (_mouseY - _h) * 0.04 + _scrollY * 0.04}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.12 + _scrollY * 0.12}% ${50 - (_mouseY - _h) * 0.12 + _scrollY * 0.12}%`;


        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        elem.style.backgroundPosition = x;
    }

    function smoothScroll(e) {
        e.preventDefault();

        // Calculate the amount to scroll
        const delta = Math.max(-1, Math.min(1, e.deltaY));
        window.scrollBy({
            top: delta * 40, // You can adjust the scrolling speed here
            behavior: 'smooth',
        });
    }
})();