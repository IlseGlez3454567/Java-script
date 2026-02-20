'use strict'

// Functions within a function

/*function calculator(num1, num2, show = false) {
    var result = num1 + num2;
    if (show) {
        screenMode(result);
    }else{
        consoleMode(result);
    }

} //if show is true, it displays the value on the screen; if false, it displays it in the console

function screenMode(result){
    document.writeln(result);
}

function consoleMode(result) {
    console.log(result);
}
calculator(2,2);*/

//Parameters -> Rest and Spread

//REST
function animalsList(animal1, animal2, ...rest) { //"rest" receives the rest of the parameters, it becomes an array with the rest of the parameters
    console.log('animal 1: ' + animal1);
    console.log('animal 2: ' + animal2);
    console.log('resto: ' + rest);
}

// animalsList('perro', 'gato', 'loro', 'pez', 'jirafa');


//SPREAD

var animals = ['Tigre', 'Pantera'];

animalsList(...animals, 'perro', 'gato', 'loro'); // Tigre is the first parameter, Pantera the second parameter, and perro, gato and loro are the rest parameter