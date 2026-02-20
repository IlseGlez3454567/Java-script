'use strict'

//Boolean -> true or false
//Null -> null value
//undefined -> a variable which no value has been asigned
//number -> number
//BigInt -> whole numbers with upper limit
//cadena /string -> character sequence
//[objeto] -> represent a collections of data and/or functionalities

var wholeNumber = 50;
var stringText = 'Hola que tal';
var stringText2 = "Hola 'como' estas"; //When there are two quotation marks, the first ones are the ones that count
var trueValue = true;
var nullValue = null;
var undefinedValue = undefined;

console.log(stringText, stringText2, undefinedValue, nullValue);

console.log(typeof (undefinedValue)); //Data type of the variable

var numero1 = "34" //Text string
console.log(numero1 + 5); //Result is 345, as a string text
console.log(Number(numero1) + 5); //Convert string to number
console.log(parseInt(numero1) + 5);//Convert string to whole number
console.log(parseFloat(numero1) + 5); //Convert string to decimal number
console.log(String(numero1) + 5); //Convert to string
console.log(typeof (numero1));



