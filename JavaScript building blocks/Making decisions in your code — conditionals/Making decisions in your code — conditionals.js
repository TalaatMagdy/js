// Basic if ... else syntax
/*
if (condition) {
  code to run if condition is true
} else {
  run some other code instead
}
* */

let shoppingDone = false;

// more condition can use else if
if (shoppingDone === true) {
    console.log(true);
} else {
    console.log(false);
}

//   not (false, undefined, null, 0, NaN, or an empty string ('')) actually returns true
if(!undefined){
    console.log("Hello");
}
/*
switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;

  // include as many cases as you like

  default:
    actually, just run this code
}
* */


// Ternary operator

// ( condition ) ? run this code : run this code instead

// Conditional chains
/*
function example(…) {
    return condition1 ? value1
        : condition2 ? value2
            : condition3 ? value3
                : value4;
}

// Equivalent to:

function example(…) {
    if (condition1) { return value1; }
    else if (condition2) { return value2; }
    else if (condition3) { return value3; }
    else { return value4; }
}
 */


// Optional Chain
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining