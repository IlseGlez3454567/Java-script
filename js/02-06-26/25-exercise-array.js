'use strict'


var array = [];
var i = 1;
//function for show array
function show(array, optional = '') {
    document.writeln('<h1> Edades de personas ' + optional + '</h1>');
    document.writeln('<ul>');
    for (let variable in array) {
        document.writeln('<li>' + array[variable] + '</li>');
    }
    document.writeln('</ul>');
    if (optional === '') {
        console.log(array);
    }

}

//request the entry of numbers
do {
    var element = parseInt(prompt('Ingrese una edad (solo números mayores a 0', 1));
    if (element > 0) {
        array.push(element);
        i++;
    }
} while (i <= 6);

show(array);

var arrayInverted = array.reverse(); // array inverted
show(arrayInverted, 'invertido');

var orderedArray = array.sort(function (a, b) { return a - b; }); // array -> ordered from largest to smallest
show(orderedArray, 'ordenado');

document.writeln('Cantidad de elementos ' + array.length); //quantity of elements

do {
    var age = parseInt(prompt('Ingresa una edad a buscar (solo números mayores a 0', 1));

} while (isNaN(age) || age < 0);

var numberSearch = array.findIndex(element => element === age);// save the position in the search variable if the entered age has been found in the array

if (numberSearch >= 0) {
    document.writeln('<h1> La edad de ' + age + 'si se ha encontrado, en esta posición' + numberSearch + '</h1>');
} else {
    document.writeln('<h1> No se ha encontrado la edad en el arreglo </h1>');
}




