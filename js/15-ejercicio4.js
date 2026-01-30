'use strict'

do {
    var numero1 = parseInt(prompt('Introduce un numero',0));
    var numero2 = parseInt(prompt('Introduce un segundo numero',0));
    
} while (isNaN(numero1) || isNaN(numero2)); //aseguramos que el usuario no ingrese letras

if (numero1 < numero2){
    for(var i = numero1; i <= numero2; i++){
        if(i % 2 == 0){
            document.writeln('<br>par '+i)
        }else{
            document.writeln('<br>impar '+i)
        }      
        
    }
} else if(numero1 > numero2){
    for(var i = numero1; i >= numero2; i--){
        if(i % 2 == 0){
            document.writeln('<br>par '+i)
        }else{
            document.writeln('<br>impar '+i)
        }  
    }
} else {
    if(numero1 % 2 == 0){
         document.writeln('<br>par '+numero1);
    }else{
        document.writeln('<br>impar '+numero1);
    }
}