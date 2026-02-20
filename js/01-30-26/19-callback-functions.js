'use strict'

/*Callback functions are functions that pass with arguments (parameters) to other functions, 
they do not have a name (anonymous)
and are executed after a certain process or task is completed*/

function adding(number1, number2, sumAndSHow, sumFor2, callback) {
    var sum = number1 + number2;
    sumAndSHow(sum);
    sumFor2(sum);
    callback(); //callback is a function without parameter
    return sum;
}

//In this example, a function with two parameter functions is invoked
// dataValue is sum
/*adding(4, 6, function (dataValue) {
    console.log('la suma es: ', dataValue);

}, function (dato) {
    console.log('la suma por 2 es: ', (dato * 2));

}
);*/

//Funciones flecha / arrows function?, i can add the callbacks this way

var result = adding(4, 6, dato => {
    console.log('la suma es:', dato); //the comma gives me a space
},
    dato => {
        console.log('la suma por 2 es:', (dato * 2));
    },
    () => {
        console.log('sin parámetro');
    }
);
console.log(result);