'use strict'
//querySelector -> first element
var tag = document.querySelector('h1');
tag.style.background = 'green';

//innerHTML -> content of element

//var box = document.getElementById('box').innerHTML;
//console.log(box);
//var box = document.getElementById('box').innerHTML = 'Texto cambiado con JS';
//console.log(box);

var box = document.getElementById('box');
box.style.padding = '20px';
box.style.color = 'white';
box.style.background = 'green';
box.className = 'hola';

// getElementsByTagName all elements of tag, add in array

var divs = document.getElementsByTagName('div');
console.log(divs);

//var content = divs[2].textContent; //get text of element position 2
//console.log(content);

var content = divs[2];
content.innerHTML = 'hola soy ilse';
console.log(content);









