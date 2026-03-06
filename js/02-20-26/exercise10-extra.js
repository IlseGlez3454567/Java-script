'use strict'

/*
Escribe un script  que dado un número nos devuelva true si es un número par y false si es un número impar. 
No usar condiconales.

Write a script that, given a number, returns true if it is an even number and false if it is an odd number. 
Do not use conditional statements.
*/

//my solution
do {
    var number = parseInt(prompt('Escribe un número (mayor a 0)', 1));
} while (number <= 0 || isNaN(number));

var residue = number%2;
if(residue == 0)
{
    document.writeln('Es un número par');
}else {
    document.writeln('Es un número impar');
}

//proposed solution
/*
let num = parseInt(prompt("Entrar numero entero"));        
let res = num%2;          
let par = res==0;      
console.log("¿Es par? " + par);
*/
