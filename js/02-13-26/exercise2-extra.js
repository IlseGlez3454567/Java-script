'use strict'

/*
En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado.
El area la calculas como lado multiplicado por lado. El perímetro es la suma de los cuatro lados. 

Given the side length of a square in a variable, you must write a program that calculates the area and perimeter of the square.
The area is calculated as side length multiplied by side length. The perimeter is the sum of the lengths of all four sides.
*/

//my solution

var sideSquare = parseInt(prompt('Escribe cuanto mide el lado del cuadrado', 1));
var area = sideSquare * sideSquare;
var perimeter = sideSquare * 4;

document.writeln('El área del cuadrado es ' + area);
document.writeln('El perímetro del cuadrado es ' + perimeter);

//proposed solution
/*
let lado = 40;
let area = 40*40;
let perimetro = 40*4;
console.log("El area es "+ area);
console.log("El perímetro es "+perimetro);
*/
