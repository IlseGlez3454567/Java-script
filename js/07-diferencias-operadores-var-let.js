'use strict'

var numero = 12;

if (numero == '12') {
    console.log('pasa');
}

if (numero !== '12') {
    console.log('pasa');
}

//pruebas let y var

var numero = 40;
console.log(numero);

if (true) {
    numero = 50;
    console.log(numero);
}
console.log(numero);

var texto = "prueba de variable";
console.log(texto);
//la diferencia es que con var definimos una variable global y con let es a nivel de bloque

if (true) {
    let texto = "prueba de variable let";
    console.log(texto);
}

console.log(texto);