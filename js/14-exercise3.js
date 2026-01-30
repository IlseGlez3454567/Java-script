'use strict'


do {
    var number1 = parseInt(prompt('Introduce un numero', 0));
    var number2 = parseInt(prompt('Introduce un segundo numero', 0));

} while (isNaN(number1) || isNaN(number2)); //we ensure that the user does not enter letters

document.writeln('<h1>De numero ' + number1 + ' a ' + number2 + ' estan estos numeros<h1>');

if (number1 < number2) {
    for (var i = number1; i <= number2; i++) {
        document.writeln('<br>' + i)
    }
} else if (number1 > number2) {
    for (var i = number1; i >= number2; i--) {
        document.writeln('<br>' + i);
    }

} else {
    document.writeln('<br>' + number1);
}