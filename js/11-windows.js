'use strict'

//alerts

alert('Hola este es un texto de prueba');
alert('Esta es una ventana de alerta');

//confirmation

var myResult = confirm('¿Estás seguro que quieres relizar esta acción?'); //save the value selected by the user, true or false
console.log(myResult);

//data entry
//prompt -> always return a string

var result = parseInt(prompt('¿Que edad tienes?', 25)); //show a window to complete, and save the value in result with a string
//25 -> autocomplete the input
//parseInt cconvert to whole number
console.log(result);