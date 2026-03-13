'use strict'
//addEventListener -> captures (records) the event
//load -> event to recorded
// using "load" avoids placing the script at the end of the body

window.addEventListener('load', () => {
    var button = document.querySelector('#button');
    function changeColor() {

        var bg = button.style.background; //bg color in variable
        if (bg == 'green') {
            button.style.background = 'red';
        } else {
            button.style.background = 'green';
        }
    }
    button.addEventListener('click', () => {
        changeColor();
    });

    //mouseover
    button.addEventListener('mouseover', function () {
        button.style.background = 'yellow';
    });

    //mouseout
    button.addEventListener('mouseout', function () {
        button.style.background = '#ccc';
    });
    //focus
    var input = document.querySelector('#name_input');
    input.addEventListener('focus', function () {
        console.log('[focus] estas dentro del input');
    });

    //blur
    input.addEventListener('blur', function () {
        console.log('[blur] estas fuera del input');
    });

    //keydown
    input.addEventListener('keydown', function (event) {
        console.log('[keydown] pulsando esta tecla', event);
    });

    //keyup
     input.addEventListener('keyup', function (event) {
        console.log('[keyup] tecla soltada', event);
    });




});//end of load event

