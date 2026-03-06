'use strict'

/*
En este script debes pedir al usuario un número de dos dígitos y debes devolver el número de unidades y de decenas, 
o sea, cada dígito del número. Usa solo operationes aritméticas
Recuerda si divides un número entre 10 el cociente entero es el número de decenas y el resto es el número de unidades

In this script, you must ask the user for a two-digit number and return the number of units and tens digits;
that is, each digit of the number. Use only arithmetic operations. 
Remember, if you divide a number by 10, the integer quotient is the number of tens and the remainder is the number of units.
*/

//my solution
do {
    var number = parseInt(prompt('Ingresa un número de 2 dígitos', 1));
} while (isNaN(number) || number < 10 || number > 99); //validates that it is a number less than 2 digits

document.writeln('El número ingresado es: ' + number + '<br>');
var dozens = parseInt(number / 10); //returns enter number
console.log(dozens);
document.writeln('Decenas: ' + dozens);

var units = number % 10; //returns the remainder of the division
console.log(units);
document.writeln('Unidades: ' + units);

//proposed solution
/*
let num= parseInt(prompt("teclear un número 1 a 99"));      
let unidades, decenas;         
unidades = num%10;         
decenas = parseInt(numero/10);       
console.log(decenas+" decenas y ");      
console.log(unidades+" unidades");
*/

