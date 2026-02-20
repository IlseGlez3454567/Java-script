'use strict'

var box = document.getElementById('box');
console.log(box);

box.style.background = 'blue';

var box2 = document.querySelector('#red');

function changeColor(color){
    box2.style.background = color;
}

changeColor('red');