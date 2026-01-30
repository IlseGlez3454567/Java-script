'use strict'

//condicional if

var edad = 11;
var nombre = 'Prueba';
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

if (edad >= 18){
    console.log(nombre+' No es mayor de edad');
} else{
    console.log(nombre+ ' Es menor de edad');
}
    
if (edad >= 18 && edad <= 54){
    console.log(nombre+' Es mayor de edad');
} else if (edad >=55){
    console.log(nombre+' Es viejo');
} else{
    console.log(nombre+' Es menor de edad');
}

if (year == 1980 || (year >= 1980 && year <= 1993)){
    console.log('generacion milenial');
}else{
    console.log('no perteneces a la generación milenial');
}