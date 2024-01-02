const mainImage = document.getElementById('main-image');
const miniImages = document.querySelectorAll('#mini-gallery *');
miniImages.forEach(miniImage => {
    miniImage.addEventListener('click', function() {
        const selectedThumbnail = document.querySelector('.selected');
        mainImage.src = miniImage.src;
        if (selectedThumbnail) {
            selectedThumbnail.classList.remove('selected');
            miniImage.classList = 'selected';
        }
    });
});