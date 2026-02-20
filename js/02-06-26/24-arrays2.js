'use strict'

//Array -> collection of elements

var nameValue = ['Ilse', 'Liset', 2, true, 'romina'];
var language = new Array('php', 'jquery', 'bootstrap', 'javaScript', 44, false);

document.writeln('Elementos del array');
document.writeln('<ul>');

for (var i = 0; i < nameValue.length; i++) {
    document.writeln('<li>' + nameValue[i] + '</li>');
}
//display in list the array
document.writeln('</ul>');

// forEach has a callback function, index, array. The last two are not necessary
/*language.forEach((element,index,array)=>{
    console.log(array);
    document.writeln('<li>' + index + '-' + element + '</li>'); //
});*/

language.forEach((element) => {
    document.writeln('<li>' + element + '</li>');
});

var women = ['Belen', 'Karina', 'Romina', 'Erika', 'Lorena'];
var women2 = ['Ana', 'Maria', 'Sara', 'Sol Perez', 'Lucia'];

women.push('Lara'); //add new element to array 
console.log(women);

//Multidimensional arrays

var womenComplete = [women, women2];
//access array 1 in position 1
console.log(womenComplete[0][1]); //Karina
//access array 2 in position 3
console.log(womenComplete[1][3]); //Sol Perez

var elem = '';
//when enter terminar, it exits the loop
/*while (elem != 'terminar') { 
    elem = prompt('Introduce un nombre de mujer');
    //add element to array
    women.push(elem);
}*/
women.pop() //pop removes the last element from the array, in this case "terminar"
console.log(women);

//removes a specific element from the array

var index = women.indexOf('Karina'); //indexOf search for the character number it is located at. Each element is a character
//Since it's an array, it starts from 0
console.log(index);

if (index > -1) {
    women.splice(index, 1); //splice deletes the elements you specify from an array, (index,1); -> index from where, 1 quantity
    //in this case removes karina
}
console.log(women);

//join convert to array in strings seprate for comma
var womenString = women.join();
console.log(womenString);

//split converts a text string into an array

var stringText = 'texto1,texto2,texto3,texto4';
var stringArray = stringText.split(',');

console.log(stringArray);

console.log(women.sort()); //sort the array alphabetically
console.log(women.reverse()); //reverse the array alphabetically from last to first

//other ways to traverse arrays

//for in -> positions
document.writeln('<ul>');
for (let womenx in women) {
    document.writeln('<li>' + women[womenx] + '</li>');
}

for (let womenx of women) {
    document.writeln('<li>' + womenx + '</li>');
}
document.writeln('</ul>');
//for of ->elements

//search

/*var search = women.find(function (x) {
    return x == 'Belen';
});
console.log(search);*/

//This is the same as the previous one but smaller
var search = women.find( girl => girl == 'Belen');
console.log(search);

//findIndex the result it gives is the index
var search = women.findIndex( girl => girl == 'Belen');
console.log(search);

//some search and comparison -> true or false
var prices = [231,542,122,22,233];
var searchPrices = prices.some(price => price >= 40); //if there -> if there is a price greater than or equal to 40, it returns true
console.log (searchPrices);