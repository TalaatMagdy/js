// number 1 comment are a number of strings, each one containing a product name and price separated by a colon.
// We'd like you to turn this into an array and store it in an array called products.

// number 2 comment is the beginning of a for loop.
// In this line we currently have i <= 0, which is a conditional test that causes the for loop to only run once,
// because it is saying "stop when i is no longer less than or equal to 0",
// and i starts at 0. We'd like you to replace this with a conditional test
// that stops the loop when i is no longer less than the products array's length.

// Just below the // number 3 comment we want you to write a line of code that splits the current array item
// (name:price) into two separate items, one containing just the name and one containing just the price.

// There is a variable called total that is created and given a value of 0 at the top of the code.
// Inside the loop (below // number 4) we want you to add a line that adds the current item price to that total in each iteration
// of the loop, so that at the end of the code the correct total is printed onto the invoice. You might need an assignment operator to do this.

// number 5 so that the itemText variable is made equal to "current item name — $current item price",
// for example "Shoes — $23.99" in each case, so the correct information for each item is printed on the invoice.
// This is just simple string concatenation, which should be familiar to you.


let total = 0;
// number 1
let products = [
'Underpants:6.99',
'Socks:5.99',
'T-shirt:14.99',
'Trousers:31.99',
'Shoes:23.99'];

for (let i = 0; i < products.length; i++) { // number 2
    // number 3
    let splitProducts =  products[i].split(':');
    let nameProduct = splitProducts[0];
    let priceProduct = splitProducts[1];
    // number 4
    total +=Number(priceProduct);
    // number 5 "Shoes — $23.99"
    console.log(nameProduct + " - " + " $" +Number(priceProduct).toFixed(2));
}

console.log("$"+total.toFixed(2));
