'use strict'

//Array -> collection of elements

var nameValue = ['Ilse', 'Liset', 2, true, 'romina'];
var language = new Array('php', 'jquery', 'bootstrap', 'javaScript', 44, false);

console.log(nameValue, language);
console.log(nameValue[3]);

//quantity of elements
console.log(language.length);

var element = parseInt(prompt('¿Qué elemento del array quieres?', 0));

if (element >= nameValue.length) {
    alert('Introduce un número menor a ' + nameValue.length);
} else {
    document.writeln(nameValue[element]);
}