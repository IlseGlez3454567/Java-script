'use strict'

// setInterval a function that allows a function to be executed repeatedly at certain time intervals

window.addEventListener('load', () => {
    var header = document.querySelector('h1');
    var start = document.querySelector('#start');
    var stop = document.querySelector('#stop');
    var time = null;

    function interval() {
        if (time == null) { //this is to prevent the loop from multiplying if you clicked start multiple times
            time = setInterval(() => {
                if (header.style.background == 'red') {
                    header.style.background = 'green';
                } else {
                    header.style.background = 'red';
                }

            }, 1000); //bucle infinite, every one second
            // setTimeout() -> one 
        }
    }
    start.addEventListener('click', function () {
        interval();

    });
    stop.addEventListener('click', function () {
        clearInterval(time);
        time = null;

    });
});