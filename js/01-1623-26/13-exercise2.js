'use string'

var addition = 0;
var counter = 0;
var mean = 0;

do {
    var number = parseInt(prompt('Introduce números hasta que introduzcas uno negativo', 0));
    if (isNaN(number)) {
        number = 0;
    } else if (number >= 0) {
        addition = addition + number;
        counter++;
    }

} while (number >= 0);

mean = addition / counter;

console.log('La suma es: ' + addition);
console.log('la media es: ' + mean);