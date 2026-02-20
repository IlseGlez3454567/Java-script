'use strict'

/*
Escribe un programa que solicite al usuario ingresar el número de kilómetros recorridos por su coche y el número de litros consumidos. 
El script debe mostrar el consumo de combustible por kilómetro.
Un problema matemático muy simple numero de litros dividido por número de kilómetros. 

Write a program that prompts the user to enter the number of kilometers traveled by their car and the number of liters consumed.
The script should display the fuel consumption per kilometer.
A very simple mathematical problem: number of liters divided by number of kilometers.
*/

//my solution
var kilometers = parseInt(prompt('Escribe el número de kilómetros recorridos por tu auto', 1));
var liters = parseInt(prompt('Escribe el número de litros consumidos', 1));

var litersForKilometers = liters / kilometers;

document.writeln('Has consumido ' + litersForKilometers + ' litros por kilómetro.');

//proposed solution
/*
let litros = prompt("Litros consumidos");
let km = prompt("Kilómetros recorridos");
litros = parseFloat(litros);
km = parseFloat(km);
let consumo = litros / km;
alert("Consumo " + consumo + " litros/km");
*/

