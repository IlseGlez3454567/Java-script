'use strict'

//switch estructura de control que permite ejecutar diferentes casos


var edad = 75;
var imprime ="";

switch (edad) {
    case 18:
        imprime = 'Acabas de cumplir la mayoría de edad';
        break;
    case 25:
        imprime = 'Eres un adulto';
        break;
    case 40:
        imprime = 'La crisis de los 40';
        break;
    case 75:
        imprime = 'Eres ya un adulto mayor';
        break;

    default:
        imprime = 'Tu edad es neutra';
        break;
}

console.log(imprime);