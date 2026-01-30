'use strict'

//var numero1 = parseInt(prompt('Escribe un numero 1',0));
//var numero2 = parseInt(prompt('Escribe otro numero 2',0));

var numero1 = 0;
var numero2 = 0;

//isNaN dice que si es letra devuelve true osea si sigue siendo true sigo en el bucle
while (numero1 <= 0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt('Escribe el numero 1 mayor a 0',0));
    numero2 = parseInt(prompt('Escribe el numero 2 mayor a 0',0)); 
}
if (numero1 < numero2){
    console.log('El numero '+numero1+'es menor al numero '+numero2);
    }else if (numero1 > numero2){
    console.log('El numero '+numero1+'es mayor al numero '+numero2);
    }else{
        console.log('Los numeros son iguales');
}


