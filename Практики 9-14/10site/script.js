var isMathCaptcha = false;

function createCaptcha() {
    // Clear the contents of captcha div first 
    document.getElementById('captcha').innerHTML = "";
    var charsArray =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
    var lengthOtp = 6;
    var captcha = [];
    for (var i = 0; i < lengthOtp; i++) {
        // Below code will not allow repetition of characters
        var index = Math.floor(Math.random() * charsArray.length + 1); // Get the next character from the array
        if (captcha.indexOf(charsArray[index]) == -1)
            captcha.push(charsArray[index]);
        else i--;
    }

    if (isMathCaptcha) {
        var num1 = Math.floor(Math.random() * 10);
        var num2 = Math.floor(Math.random() * 10);
        var result = num1 + num2;
        captcha = [num1, "+", num2, "="];
        code = result.toString();
    } else {
        code = captcha.join("");
    }

    var canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 100;
    canv.height = 50;
    var ctx = canv.getContext("2d");
    ctx.font = "25px Georgia";
    ctx.strokeText(captcha.join(""), 0, 30);
    // Storing captcha so that it can be validated. You can save it somewhere else according to your specific requirements.
    document.getElementById("captcha").appendChild(canv); // Adds the canvas to the body element
}

function validateCaptcha() {
    event.preventDefault();

    var input = document.getElementById("cpatchaTextBox").value.trim();

    if (input.length === 0) {
        alert("Вы не ввели капчу! Пожалуйста, введите капчу.");
        return;
    }


    if (input == code) {
        alert("Valid Captcha");
    } else {
        if (isMathCaptcha) {
            alert("Invalid Captcha. Try Again.");
            createCaptcha();
            isMathCaptcha = false;
        } else {
            alert("Invalid Captcha. Try Math Captcha.");
            isMathCaptcha = true;
            createCaptcha();
        }
    }
}