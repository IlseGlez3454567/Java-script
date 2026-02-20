'use strict'

//condicional if

var age = 11;
var person = 'Prueba';
var year = 1980;

/*if (edad == 11) {
    console.log('La edad es igual a 11');
} else if (edad == 13){
    console.log('La edad es igual a 13');
} else if(edad < 12){
    console.log('la edad es menor que 8');
} else{
    console.log('La edad no es 11 ni 13 ni es menor a 12');
}*/

if (age >= 18) {
    console.log(person + ' No es mayor de edad');
} else {
    console.log(person + ' Es menor de edad');
}

if (age >= 18 && age <= 54) {
    console.log(person + ' Es mayor de edad');
} else if (age >= 55) {
    console.log(person + ' Es viejo');
} else {
    console.log(person + ' Es menor de edad');
}

if (year == 1980 || (year >= 1980 && year <= 1993)) {
    console.log('Generacion milenial');
} else {
    console.log('No perteneces a la generación milenial');
}