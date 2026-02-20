'use strict'

/*
Una tortilla de patatas lleva 200 gramos de patatas por persona. 
Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. 
Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias

A Spanish omelet (tortilla de patatas) uses 200 grams of potatoes per person. 
For every kilogram of potatoes, you need 5 eggs and 300 grams of onion. 
Write a script that, given the number of people serving, calculates the quantities of ingredients needed.
*/

//my solution

do {
    var diners = parseInt(prompt('Escribe el numero de comensales', 1));
} while (diners < 0);

var totalGramsPotatoes = 200 * diners;
var totalKilosPotatoes = totalGramsPotatoes / 1000;
var totalEggs = totalKilosPotatoes * 5;
var totalGramsOnions = totalKilosPotatoes * 300;
var totalKilosOnions = totalGramsOnions / 1000;

document.writeln('Total de kilos de papas: ' + totalKilosPotatoes + '<br>');
document.writeln('Total de gramos de papas: ' + totalGramsPotatoes + '<br>');
document.writeln('Total de huevos: ' + totalEggs + '<br>');
document.writeln('Total de gramos de cebolla: ' + totalGramsOnions + '<br>');
document.writeln('Total de kilos de cebolla : ' + totalKilosOnions + '<br>');

//proposed solution
/*
let comensales, papas, huevos, cebollas;           
comensales = parseInt(prompt("Comensales"));           
papas = comensales*200;          
papas = papas/1000;    //en kilos         
huevos = papas*5;         
cebolla = papas*300;       
console.log("Patatas " + papas+" kilos");        
console.log("Huevos " + huevos);       
console.log("Cebolla "+cebolla +" gramos");
*/

