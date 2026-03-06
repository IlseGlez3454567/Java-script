'use strict'

/*
Cambio de unidades. en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.
Recuerda una hora son 60 minutos y cada minuto son 60 segundos.

Unit conversion. In this exercise, you must convert a time measurement given in hours and minutes to seconds.
Remember, one hour is 60 minutes, and each minute is 60 seconds.
*/ 

//my solution
var hours = parseInt(prompt('Escribe un número de horas',1));
var minutes = parseInt(prompt('Escribe un número de minutos',1));

var hoursConvertedMinutes = hours * 60;
var totalMinutes = hoursConvertedMinutes + minutes;
var minutesConvertedSeconds = totalMinutes * 60;

document.writeln('El total de segundos es ' + minutesConvertedSeconds);

//proposed solution
/*
let horas = 2;           
let min = 30;           
let segundos;         
//las horas a segundos           
segundos = 2*60*60;       
//ahora sumo los minutos en segundos        
segundos += 30*60;          
console.log("segundos "+segundos);
*/
