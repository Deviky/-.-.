function checkRegistration() {
    var response = prompt("Желаете пройти регистрацию на сайте? (Да/Нет)");
    if (response && response.toLowerCase() === "да") {
        alert("Круто!");
    } else {
        alert("Попробуй ещё раз");
    }
}

document.getElementById('loginButton').addEventListener('click', function(event) {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    console.log("Email:", email);
    console.log("Password:", password);

    checkRegistration();
});