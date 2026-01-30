'use strict'

//alertas

alert('Hola este es un texto de prueba');
alert('esta es una ventana de alerta');

//confirmación

var mi_resultado = confirm('¿Estás seguro que quieres relizar esta acción?'); //guarda el valor que seleccione el usuario true o false
console.log(mi_resultado);

//ingreso de datos
//prompt siempre devuelve un string

var resultado = parseInt(prompt('¿Que edad tienes?', 25)); //muestra una ventanilla para completar y guarda el valor en resultado pero en string
//25 autocompleta la caja/input
//parseInt convierte a numero entero
console.log(resultado);