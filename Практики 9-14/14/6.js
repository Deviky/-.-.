document.addEventListener("DOMContentLoaded", function() {
    // Анимация заголовка
    setTimeout(function() {
        document.querySelector('.animate-heading').style.opacity = '1';
        document.querySelector('.animate-heading').style.transform = 'translateY(0)';
    }, 500);

    // Дополнительная анимация для кнопки
    setTimeout(function() {
        document.querySelector('.animate-button').style.transform = 'scale(1)';
    }, 1000);
});

// Функция для анимации кнопки при клике
function animateButton() {
    var button = document.querySelector('.animate-button');
    button.style.transform = 'scale(0.95)';
    setTimeout(function() {
        button.style.transform = 'scale(1)';
    }, 200);
}