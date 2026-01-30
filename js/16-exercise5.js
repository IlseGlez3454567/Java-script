'use strict'

do {
    var number1 = parseInt(prompt('Introduce un numero mayor a 0', 1));

} while (number1 == 0);

for (var i = 1; i <= number1; i++) {
    if (number1 % i == 0) {
        console.log('divisor' + i);
    }
}