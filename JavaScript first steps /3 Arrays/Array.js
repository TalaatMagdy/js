// Creating arrays
let list  = [1,2,3,4,"hello",[1,"JS"]];
// Access  Array item
console.log(list[0]); // first item = 1
console.log(list[list.length-1]); // last item = [1,"js"]

// modify of item
list[0] = "Ruby";
console.log(list[0]);

// get multidimensional array
console.log(list[5][0]); // return 1

// loop for array
// let sequence = [1, 1, 2, 3, 5, 8, 13];
// for (let i = 0; i < sequence.length; i++) {
//     console.log(sequence[i]);
// }

// Converting  strings to arrays
let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(','); // split by ,
console.log(myArray);

// convert Array to string
let myNewString = myArray.join(',');
console.log(myNewString);

let dogNames = ['Rocket','Flash','Bella','Slugger'];
dogNames=dogNames.toString(); // Rocket,Flash,Bella,Slugger
console.log(dogNames);
// Join more editable use any things another ,
// toString() always uses a comma

console.log("============================================")
// ========================================
// ========= adding and remove ============
//=========================================

// add item in last index
let myArra = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
myArra.push("Cardiff"); // push add item in end of array that's mean add Cardiff after Carlisle
//console.log(myArra);
myArra.push('Bradford', 'Brighton'); // push use to add more once item
//console.log(myArra);

//remove item in last index
myArra.pop(); // pop remove last item in array that's mean remove 'Brighton'
//console.log(myArra);

// add item in first index
myArra.unshift('Edinburgh');
console.log(myArra);

// remove item in first index
myArra.shift();
console.log(myArra);

