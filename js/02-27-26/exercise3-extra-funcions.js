'use strict'


/*
1. Pedir un número al usuario.
2. Validar que sea número.
3. Crear una función que:
* Evalúe si el número es mayor o menor que 10.
* Use un callback.
4. El callback deberá:
* Mostrar el mensaje en el DOM.
* Cambiar el color del texto:
--Verde → si es mayor a 10
--Azul → si es igual a 10
-- Rojo → si es menor a 10

1. Ask the user for a number.
2. Validate that it is a number.
3. Create a function that:
* Evaluates whether the number is greater than or less than 10.
* Uses a callback.
4. The callback should:
* Display the message in the DOM.
* Change the text color:
--Green → if greater than 10
--Blue → if equal to 10
--Red → if less than 10
*/
document.addEventListener('DOMContentLoaded', function(){
function assessValue(num, callback) {
    var result;
    var color;
    if (num > 10) {
        result = 'Es mayor 10';
        color = 'green';
    } else if (num < 10) {
        result = 'Es menor a 10';
        color = 'red';
    } else {
        result = 'Es igual a 10';
        color = 'blue';
    }
    callback(result,color);
}

function showAndColor(value,textColor){
    var text = document.createElement('h3');
    text.textContent = value;
    document.body.appendChild(text);
    text.style.color = textColor;
}

var number;
do{
    number = parseInt(prompt('Ingresa el numero'));
}while(isNaN(number) || number < 0);

assessValue(number, showAndColor);

});
