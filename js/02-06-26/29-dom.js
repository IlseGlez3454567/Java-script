'use strict'

var redDivs = document.getElementsByClassName('red');
var yellowDivs = document.getElementsByClassName('yellow');

console.log(redDivs);

redDivs[0].style.background = 'red';

for (var index in redDivs) {
    if (redDivs[index].className == 'red') {
        redDivs[index].style.background = 'blue';
    }
}

var elements = document.querySelectorAll("h1, #mih1, .yellow, h3");
console.log(elements);