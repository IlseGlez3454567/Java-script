'use strict'

var year = 2024;

while (year <= 2051) {
    console.log('Estamos en el año: ' + year);
    year++;
}

while (year != 1991) {
    console.log('Estamos en el año: ' + year);
    year--;
    if (year == 2000) {
        break;
    }
}

var years = 20;

do {
    console.log('Mientras sea menor a 25');
    years++;
} while (years < 25);