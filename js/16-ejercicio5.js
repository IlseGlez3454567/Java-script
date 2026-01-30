'use strict'

do {
    var numero1 = parseInt(prompt('Introduce un numero mayor a 0',1));
    
} while (numero1 == 0);

for(var i = 1; i <= numero1; i++){
    if( numero1%i == 0) {
        console.log('divisor'+i);
    }
}