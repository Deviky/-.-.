document.addEventListener('DOMContentLoaded', function() {
    var centeredImage = document.getElementById('centered-image');
    var coordinatesOutput = document.getElementById('coordinates-output');

    centeredImage.addEventListener('click', function(event) {
        var x = event.clientX;
        var y = event.clientY;

        var coordinatesText = 'coordinate: X=' + x + ', Y=' + y;
        coordinatesOutput.innerText = coordinatesText;

        console.log(coordinatesText);
    });
});