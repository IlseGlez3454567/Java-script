'use strict'

//Booleano -> verdadero o falso
//Null -> nulo o sin valor
//undefined -> una variable a la cual no ha sido asignado un valor
//number -> numerico
//BigInt -> numeros enteros con un límite superior
//cadena /string -> secuencia de caracteres
//[objeto] -> representa una colección de datos y/o funcionalidades


var numero_entero = 50;
var cadena_de_texto = "hola que tal";
//cuando hay 2 comillas siempre cuentan las primeras
var cadena_de_texto2 = "hola 'como' estas";
var verdadero = true;
var nulo = null;
var indefinida = undefined;

console.log(cadena_de_texto, cadena_de_texto2, indefinida, nulo);

//me dice el tipo de dato de la variable
console.log(typeof (indefinida));

var numero1 = "34" //cadena de texto
console.log(numero1 + 5); //resultado 345 como cadena de texto

//convierto el string a numero
console.log(Number(numero1) + 5);

//convierto el string a numero entero
console.log(parseInt(numero1) + 5);

//convierto el string a numero decimal
console.log(parseFloat(numero1) + 5);

//convierto a string
console.log(String(numero1) + 5);
console.log(typeof (numero1));



