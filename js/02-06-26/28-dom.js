'use strict'


//create tags elements

var section = document.querySelector('#mysection');
//var h1 = document.getElementById('mih1');
//var hr =document.createElement('hr');

section.append('Estoy agregandome al DOM'); //add to DODM elements and content
//section.append(hr);

section.prepend('estoy agregandome al dom antes del elemento que ya está');

var p = document.createElement('p');
p.append('estoy agregandome antes del elemento indicado');
section.insertBefore(p, h1); //add before element h1

var section1 = document.querySelector('#misection');
var hr = createElement('hr');
var h1 = document.getElementById('mih1');

var divs = document.getElementsByTagName('div');
console.log(divs);

for (let value in divs) {
    if (typeof divs[value].textContent == 'string') {
        var paragraph = document.createElement('p');
        var text = documentTextNode(divs(value).textContent);

        paragraph.append(text);
        section.append(paragraph);
    }

}