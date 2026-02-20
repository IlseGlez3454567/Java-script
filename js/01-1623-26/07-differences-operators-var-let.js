'use strict'

var number = 12;

if (number == '12') {
    console.log('pasa');
}

if (number !== '12') {
    console.log('pasa');
}

//Test let and var

var number = 40;
console.log(number);

if (true) {
    number = 50;
    console.log(number);
}
console.log(number);

var text = "Prueba de variable";
console.log(text);
//Difference is that with var we define a global variable and while with let it's at the block level

if (true) {
    let text = "Prueba de variable let";
    console.log(text);
}

console.log(text);