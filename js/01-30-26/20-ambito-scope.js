'use strict'

//Scope of variables within a function and also outside the function

function helloWorld(text) {
    var hello = 'hola';
    console.log(text);
    console.log(hello);
    console.log(number);
    //This is correct; we can call a variable that has been defined outside the function (global variable)
}

var text = 'hola mundo, soy una variable global';
var number = 25;


console.log(hello); //error, it cannot be invoked from outside the function, its not defined

helloWorld(text);