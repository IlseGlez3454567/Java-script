'use strict'

/*
Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. 
Se acepta que solo se usarán números válidos.

This function will be called isPar(num) and must return true if the argument is even and false if it is odd.
Only valid numbers will be used.
*/

//my solution with corrections
document.addEventListener('DOMContentLoaded', function () { //Execute this function when the HTML is fully loaded
    function isPar(num, callback) {
        var message;
        if (num % 2 === 0) {
            message = 'El numero es par';
        } else {
            message = 'El numero es impar';
        }
        callback(message);
    }

    function createDomText(text) {
        var domText = document.createElement('h2'); //create element h2 in variable domText
        domText.textContent = text; // The value of the text parameter is assigned to the h2 element created in the domText variable
        document.body.appendChild(domText); // add text to body
    }
    var value;
    do {
        value = parseInt(prompt('Ingresa un número'));
    } while (isNaN(value) || value < 0);  //First we validate, then we execute the function (correction)
    isPar(value, createDomText);


});
//suggested solution
/*function esPar(num){        
    return (num%2 == 0);       
}
dato = parseInt(prompt("Escribir un número"));
alert(esPar(dato));
*/
