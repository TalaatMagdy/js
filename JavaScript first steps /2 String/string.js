// Define string

let string = "Hello";

// combine to string
console.log(string + "JS" + ' & ' + string + 'Ruby');

// convert number to string
let number = 123;
let newString = number.toString();
console.log(typeof newString + " " + newString);

// length
console.log(string.length);
// get first element
console.log(string[0]);

// get last element
console.log(string[string.length -1 ]);

// get index of char or string of first appear
console.log(string.indexOf('e')); // 1
console.log(string.indexOf('ello')); // 1

// if not found return -1
// can for search is contain or not
console.log(string.indexOf('s')); // -1

// return part of string like "llo" from "Hello"
console.log(string.slice()); // default word Hello
console.log(string.slice(1));// from 1 position to last --- ello
console.log(string.slice(0,2)); //He last not return just 0,1
console.log(string.slice(0,-2)); //Hel
console.log(string.slice(0,10)); //Hello

let radData = 'My NaMe Is MuD';
console.log(radData.toLowerCase()); // lower all word
console.log(radData.toUpperCase()); // upper all word

// Updating parts of a string
console.log(radData.replace('MuD','van'));
