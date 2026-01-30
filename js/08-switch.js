'use strict'

//Switch -> control structure that allows different cases to be executed

var age = 75;
var print = "";

switch (age) {
    case 18:
        print = 'Acabas de cumplir la mayoría de edad';
        break;
    case 25:
        print = 'Eres un adulto';
        break;
    case 40:
        print = 'La crisis de los 40';
        break;
    case 75:
        print = 'Eres ya un adulto mayor';
        break;
    default:
        print = 'Tu edad es neutra';
        break;
}
console.log(print);