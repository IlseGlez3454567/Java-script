'use strict'

do {
    var number1 = parseInt(prompt('Introduce un numero', 0));
    var number2 = parseInt(prompt('Introduce un segundo numero', 0));

} while (isNaN(number1) || isNaN(number2)); //we ensure that the user does not enter letters
if (number1 < number2) {
    for (var i = number1; i <= number2; i++) {
        if (i % 2 == 0) {
            document.writeln('<br>par ' + i)
        } else {
            document.writeln('<br>impar ' + i)
        }

    }
} else if (number1 > number2) {
    for (var i = number1; i >= number2; i--) {
        if (i % 2 == 0) {
            document.writeln('<br>par ' + i)
        } else {
            document.writeln('<br>impar ' + i)
        }
    }
} else {
    if (number1 % 2 == 0) {
        document.writeln('<br>par ' + number1);
    } else {
        document.writeln('<br>impar ' + number1);
    }
}