'use strict'

//operators

var number1 = 2;
var number2 = 3;

var operation1 = number1 + number2; //This is operation, not a concatenation
var operation2 = number1 - number2;
var operation3 = number1 * number1;
var operation4 = number2 / number1;
var operation5 = number2 % number1; //save the rest of division

console.log('El resultado de la suma es: ' + operation1);
console.log('El resultado de la resta es: ' + operation2);
console.log('El resultado de la multiplicacion es: ' + operation3);
console.log('El resultado de la division es: ' + operation4);
console.log('El resultado del residuo de la división es: ' + operation5);

console.log('El resultado del residuo de la división es: ' + operation5 + ' la resta: ' + operation2 + ' la multiplicacion: ' + operation3
    + ' la división: ' + operation4 + ' residuio: ' + operation5); //concatenation