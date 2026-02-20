'use strict'

/*
Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule el precio total que vas a pagar por tu compra.
Para calcular el total debes sumar al precio el resultado de multiplicas precio por el iva y dividir por 100.

You've made a purchase and know the product price and the VAT. Write a script that calculates the total price you'll pay for your purchase.
To calculate the total, add the product price to the VAT-amounted product and divide by 100.
*/

//my solution
var productPrice;
var iva;
var total;

productPrice = parseInt(prompt('Introduce el precio del producto', 1));
iva = prompt('Introduce el iva', 1);

total = productPrice + ((productPrice * iva) / 100);

document.writeln('El total es ' + total);

//proposed solution
/*          
let precio=350;          
let iva = 21;            
let  precioTotal = precio + precio*21/100           
console.log("El precio total es: "+precioTotal);            
</script> */