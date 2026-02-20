'use strict'

/*
En este ejercicio debes escribir un programa que lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario.
Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre"

In this exercise, you must write a program that reads the user's name and greets them with "Hello" followed by the username.
To read the name, use a prompt with a message such as "Enter your name."
*/

//my solution

var username = prompt('Escribe tu nombre');

document.writeln('Hola' + username);
console.log('Nombre de usuario: ' + username);

//proposed solution

/*
let nombre = prompt("escribe tu nombre");           
let saludo = "Hola "+nombre;            
console.log(saludo);
*/