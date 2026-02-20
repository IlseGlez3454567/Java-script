'use strict'

//text transformation

var number = 23;
var text1 = ' primer texto de prueba de este día ';
var text2 = 'SEGUNDO TEXTO DE PRUEBA';

var data = number.toString(); //invokes toSring function, number is converted in text string and saves it to data
//console.log(typeof data);

data = text1.toUpperCase(); //convert the text to uppercase
data = text1.toLowerCase(); //convert the text to lowercase

console.log(data);

//Calculate length/longitud
var name1 = '';
var name2 = 'Ilse';
var name3 = ['Erika', 'Monse'];
console.log(name1.length); //this is 0
console.log(name2.length); // this is 4
console.log(name3.length); // this is 2 (elements in the array)

//Concatanate text

var totalText = text1.concat(text2);
// var totalText = text1.concat(text2 + 'nuevo texto'); second example for concatenate
console.log(totalText);

//indexOf search for the character number it is located at
var search = text1.indexOf('de');
console.log(search);

//lastIndexOF if there are 2 identical words, find the last one, count the characters up to that last one
//if the word were not there, it would give a negative number
search = text1.lastIndexOf('de');
console.log(search);

//search if there are 2 identical words, find the first one, count the characters up to that first word
search = text1.search('de');
console.log(search);

//match find the word and detail it in an array with the character number where the word is located
search = text1.match('de');
console.log(search);

//tt searches and finds more than one word like "array," and details it
search = text1.match(/de/g);
console.log(search);

//substr(12, 3) 
search = text1.substring(12, 3); //returns the 3 characters starting from 12
console.log(search);

//charAt returns the letter of the character I specify
search = text1.charAt(10);
console.log(search);

//startWith returns true if the word at the beginning is the one i specify
search = text1.startsWith('primer');
console.log(search);

//endWith returns true if the word at the end is the one i specify
search = text1.endsWith(' ');
console.log(search);

//include returns true if it finds the word
search = text1.includes('nuevo');
console.log(search);

//replace returns true if it finds the word
search = text1.replace('prueba', 'test');
console.log(search);

//replace returns since caracter 14
search = text1.slice(14);
console.log(search);

//slice returns starting from character 14
search = text1.slice(14);
//search = text1.slice(14,20); returns from character 14 to 22
console.log(search);

//split convert text in array
search = text1.split();
//search = text1.split(''); convert each letter into an element of the array -> join quotation marks 
//search = text1.split(' '); convert each word into an element of the array - > separate quotation marks (with spaces)
console.log(search);

//trim remove spaces from the text before and after
//search = text1.trim();
search = text1.trim().split(); //Remove spaces from the text before and after, and each word becomes an element of the aarray
console.log(search);



