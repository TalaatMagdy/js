// Built-in browser functions
let myText = 'I am a string';
let newString = myText.replace('string', 'sausage');
console.log(newString);

// Invoking functions
function myFunction() {
    console.log('hello');
}
// calls the function once
myFunction();

// anonymous function
// function not has the name
// use in event handler
// function() {
//     alert('hello');
// }

//  const myButton = document.querySelector('button');
// //
//  myButton.onclick = function() {
//     console.log('hello');
//  };

//also assign an anonymous function to be the value of a variable, for example:
 const myGreeting = function() {
  console.log('hello');
 };

 // call anonymous
myGreeting();

// Different Scope

// 1- Global Scope
let x = 0 ;
// 2. local Scope
function f() {
let y = 0;
console.log(x);
console.log(y);
}
console.log(x);
// ReferenceError: "y" is not defined
//console.log(y);


// Functions inside functions
function myBigFunction() {
    let myValue;

    subFunction1();

}

function subFunction1() {
    // ReferenceError: myValue is not defined
    console.log(myValue);
}

myBigFunction();


// Solve above problem
// Functions inside functions
function myBigFunction() {
    let myValue;

    subFunction1();

}

function subFunction1(value) {
    // ReferenceError: myValue is not defined
    console.log(value);
}

myBigFunction();

