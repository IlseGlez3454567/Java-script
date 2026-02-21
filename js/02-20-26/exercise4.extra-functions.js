'use strict'
/*
1. Pedir un número (puede ser negativo ahora).
2. Validarlo.
3. Crear una función que:
* Determine si es:
--Positivo
--Negativo
--Cero
4. Use un callback.
* El callback deberá:
--Mostrar el mensaje en el DOM.
--Agregar un emoji según el tipo.
--Cambiar el tamaño del texto.
Positivo → Verde → 😊 → font-size grande
Negativo → Rojo → 😕 → font-size mediano
Cero → Gris → 😐 → font-size pequeño

1. Request a number (it can be negative now).
2. Validate it.
3. Create a function that:
* Determines if it is:
--Positive
--Negative
--Zero
4. Use a callback.
* The callback should:
--Display the message in the DOM.
--Add an emoji based on the type.
--Change the text size.
*/

document.addEventListener('DOMContentLoaded', function () {

    function classifyNumber(num, callback) {
        let message;
        let type;

        // 👇 AQUÍ VA TU LÓGICA
        if (num > 0) {
            message = 'Positivo';
            type = 'Positivo'
        } else if (num < 0) {
            message = 'Negativo';
            type = 'Negativo';
        } else {
            message = 'Es igual a 0';
            type = 'Cero';
        }

        callback(message, type);
    }

    function renderMessage(text, type) {
        const element = document.createElement('h2');

        if (type == 'Positivo') {
            element.textContent = text + " 😊 ";
            element.style.color = 'green';
            element.style.fontSize = '32px';

        } else if (type == 'Negativo') {
            element.textContent = text + " 😕 ";
            element.style.color = 'red';
            element.style.fontSize = '24px';
        } else {
            element.textContent = text + " 😐 ";
            element.style.color = 'blue';
            element.style.fontSize = '16px';
        }

        document.body.appendChild(element);
    }

    let value;

    do {
        value = parseFloat(prompt('Ingresa un número (puede ser negativo)'));
    } while (isNaN(value));

    classifyNumber(value, renderMessage);

});