let login = prompt("Введите логин:", "");

if (login === "Админ") {
    let password = prompt("Введите пароль:", "");

    if (password === "ДэнГлавный") {
        alert("Здравствуйте!");
        displayAdminContent()
        disp
    } else if (password === null || password === "") {
        alert("Отменено");
        displayAccessDenied();
    } else {
        alert("Неверный пароль");
        displayAccessDenied();
    }

} else if (login === null || login === "") {
    alert("Отменено(");
    displayAccessDenied();
} else {
    alert("Я вас не знаю!!!");
    displayAccessDenied();
}

function displayAdminContent() {
    document.body.innerHTML = `
        <h1>Добро пожаловать, Админ!</h1>
        <p>Это защищенная страница для админа.</p>
        <p>Здесь вы - БОГ.</p>
    `;
}

function displayAccessDenied() {
    document.body.innerHTML = '<div style="text-align: center; margin-top: 20vh; font-size: 4em;">&#x1F6D1;</div><h1 style="text-align: center;">Доступ запрещен</h1><p style="text-align: center;">У вас нет прав для просмотра этой страницы!</p>';
}