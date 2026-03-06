'use strict'

/*
Crea una función que tenga dos argumentos: num1, num2, y que devuelva como resultado la suma de ambos números. 
Se supone que se usarán solo números válidos, no letras o símbolos.  

Create a function that takes two arguments: num1 and num2, and returns the sum of both numbers.
Only valid numbers should be used; letters or symbols are not acceptable.
*/


//my solution
function sum(num1, num2) {
    var total = num1 + num2;
    return total;
}

var n1 = parseInt(prompt('Ingresa el primer valor', 0));
var n2 = parseInt(prompt('Ingresa el segundo valor', 0));

console.log('El resultado de la suma es ' + sum(n1, n2));
