'use strict'
/*
Teiens que escribir un programa que intercambie el valor de dos variables. 
Al final la primera variable debe terner el valor de la segunda y la segunda el valor de la primera. 
No vale usar arrays ni asignación múltiple.

You have to write a program that swaps the values ​​of two variables.
In the end, the first variable should have the value of the second, and vice versa.
Using arrays or multiple assignment is not allowed.
*/

//my solution
var variableA = 10;
var variableB = 12;
console.log('Variable A: ' + variableA);
console.log('Variable B: ' + variableB);

var variableC = variableA;
variableA = variableB;
variableB = variableC;

console.log('Variable A: ' + variableA);
console.log('Variable B: ' + variableB);

//proposed solution
/*
let varUno = 10;      
let varDos = 30;         
console.log("varUno es " +varUno);   // 10          
console.log("varDos es " +varDos);   // 30          
let aux;          
aux=varUno;          
varUno = varDos;         
varDos = aux;       
console.log("varUno es " +varUno);    // 30      
console.log("varDos es " +varDos);    // 10
*/