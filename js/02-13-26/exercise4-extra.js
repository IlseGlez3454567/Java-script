'use strict'
/*
En este ejercicio vas a pedir al usuario que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.
Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3.

In this exercise, you will ask the user to enter three integers, and the script will display the average of the three.
Remember that the average of three numbers is calculated by adding the three numbers and dividing by 3.
*/

//my solution
var array = [];
var i = 1;

// it asks the user for numbers and stores them in an array
do {
    var number = parseInt(prompt('Escribe numero ', 1));
    if (number > 0 || isNaN(number)) {
        array.push(number);
        i++;
    }

} while (i <= 3);
console.log(array);

//sum of elements of the array
var sum = 0;
for (var element of array) {
    sum = sum + element;
}
console.log(sum);

// stores the number of elements in the array
var elementsQuantity = array.length;
console.log('Cantidad de elementos es ' + elementsQuantity);

// operation of the average
var average = sum / elementsQuantity;
document.writeln('La media de los numeros ingresados es ' + average);

//proposed solution

/*
const num1 = parseInt(prompt("Teclea un numero entero");            
const num2 = parseInt(prompt("Teclea un numero entero");        
const num3 = parseInt(prompt("Teclea un numero entero");        
let media = (var1 + var2 + var3)/3;          
alert("La media de los números es "+media);
*/

