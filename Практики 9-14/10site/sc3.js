function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 3) + "...";
    } else {
        return str;
    }
}



document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("text1").textContent = truncate(document.getElementById("text1").textContent, 5);
    document.getElementById('text2').textContent = truncate(document.getElementById('text2').textContent, 25);
});