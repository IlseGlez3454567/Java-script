'use strict'

//var number1 = parseInt(prompt('Escribe un numero 1',0));
//var number2 = parseInt(prompt('Escribe otro numero 2',0));

var number1 = 0;
var number2 = 0;

//isNaN -> if it's a letter return true, if it remains letter, i'm still in the loop
while (number1 <= 0 || number2 <= 0 || isNaN(number1) || isNaN(number2)) {
    number1 = parseInt(prompt('Escribe el numero 1 mayor a 0', 0));
    number2 = parseInt(prompt('Escribe el numero 2 mayor a 0', 0));
}
if (number1 < number2) {
    console.log('El numero ' + number1 + 'es menor al numero ' + number2);
} else if (number1 > number2) {
    console.log('El numero ' + number1 + 'es mayor al numero ' + number2);
} else {
    console.log('Los numeros son iguales');
}


