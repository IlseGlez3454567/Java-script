'use strict'

function greeting() {
    return 'hola soy ilse';
}

console.log(greeting()); //invoke function


// show = false is a optional parameter, it already has something by default
function calculator(number1, number2, show = false) {
    if (show == false) {
        console.log('suma: ' + (number1 + number2));
    } else {
        document.writeln('suma: ' + (number1 + number2));
    }

}

// if i click accept it's true, cancel it's false
var x = confirm('Elige si lo muestro en pantalla o en consola');
console.log(x);
if (x) { //if it has content, enter it, or if it's true
    calculator(3, 3, true); //invoke function
} else {
    calculator(2, 2); //invoke function

}

// show = now it's true