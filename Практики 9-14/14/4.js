document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("custom-slider");
    const sliderValue = document.getElementById("slider-value");

    slider.addEventListener("input", function() {
        updateSliderValue();
    });

    slider.addEventListener("mousedown", function() {
        slider.addEventListener("mousemove", updateSliderValue);
    });

    document.addEventListener("mouseup", function() {
        slider.removeEventListener("mousemove", updateSliderValue);
    });

    function updateSliderValue() {
        sliderValue.textContent = slider.value;
    }
});