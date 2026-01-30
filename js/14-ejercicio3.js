'use strict'


do {
    var  numero1 = parseInt(prompt('Introduce un numero',0));
    var numero2 = parseInt(prompt('Introduce un segundo numero',0));
    
} while (isNaN(numero1) || isNaN(numero2)); //aseguramos que el usuario no ingrese letras

document.writeln('<h1>De numero '+numero1+' a '+numero2+' estan estos numeros<h1>');

if (numero1 < numero2){
    for(var i = numero1; i <= numero2; i++){
        document.writeln('<br>'+i)
    }
} else if(numero1 > numero2){
    for(var i = numero1; i >= numero2; i--){
        document.writeln('<br>'+i);
    }
   
} else {
    document.writeln('<br>'+numero1);
}