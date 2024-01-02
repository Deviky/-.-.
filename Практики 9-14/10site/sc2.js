
function Accumulation(startingValue){
    this.value = startingValue;

    this.read = function(){
        let number = parseInt(prompt("Введите число", ""));

        if (!isNaN(number)) {
            this.value += number;
            alert("Текущее значение: " + this.value);
        } else {
            alert("Вы ввели некорректное число. Попробуйте еще раз.");
        }
    };
}



let accumulation = new Accumulation(1);
accumulation.read();