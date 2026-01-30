'use string'

var suma = 0;
var contador = 0;
var media = 0;

do {
    var numero = parseInt(prompt('introduce números hasta que introduzcas uno negativo', 0));
    if (isNaN(numero)){
         numero = 0;
    } else if(numero >= 0){
        suma = suma +numero;
        contador++;
    }
   
} while (numero >= 0);

media = suma /contador;

console.log('La suma es: '+suma);
console.log('la media es: '+media);