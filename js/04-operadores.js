'use strict'

//operadores

var numero1 = 2;
var numero2 = 3;

var operacion1 = numero1 + numero2; //operación, no concatena
var operacion2 = numero1 - numero2;
var operacion3 = numero1 * numero2;
var operacion4 = numero2 / numero1;
var operacion5 = numero2 % numero1; //guarda el restante de la división

console.log('El resultado de la suma es: ' + operacion1);
console.log('El resultado de la resta es: ' + operacion2);
console.log('El resultado de la multiplicacion es: ' + operacion3);
console.log('El resultado de la division es: ' + operacion4);
console.log('El resultado del residuo de la división es: ' + operacion5);

console.log('El resultado del residuo de la división es: ' + operacion5 + ' la resta: ' + operacion2 + ' la multiplicacion: ' + operacion3
    + ' la división: ' + operacion4 + ' residuio: ' + operacion5); //concatenar