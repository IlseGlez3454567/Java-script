'use strict'

var firstname = prompt('Ingresa tu nombre');
var lastname = prompt('Ingresa tu apellido');

// Normal 


var text = 'mi nombre es ' + firstname + ' mi apellido es ' + lastname;
console.log(text);

// Interpolation of variables
/*A technique for elegantly combining text strings 
with variable values ​​without concatenating them, using literal templates*/

var text2 = `<h1> hola que tal </h1>
<h2> Mi nombre es ${firstname} </h2>
<h3> Mi apellido es ${lastname} </h3>

`
document.writeln(text2);