// JavaScript Object Notation (JSON) is
// a standard text-based format for representing structured data based on JavaScript object syntax.
// used for transmitting data in web applications
// (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).

// Converting a string to a native object is called deserialization
//converting a native object to a string so it can be transmitted across the network is called serialization.

// ============== JSON structure =================
// JSON is a string whose format very much resembles JavaScript object literal format.
// can include the same basic data types inside JSON as you can in a standard JavaScript object
// — strings, numbers, arrays, booleans, and other object literals.
// This allows you to construct a data hierarchy,
let superHeroes ={
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
                "Radiation resistance",
                "Turning tiny",
                "Radiation blast"
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        },
        {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
            ]
        }
    ]
};
console.log(superHeroes.homeTown); // Metro City
console.log(superHeroes['active']); // true
console.log(superHeroes['members'][1]['powers'][2]); // Superhuman reflexes

// ====== Arrays as JSON ====
let arrayOfJson = [
    {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
            "Radiation resistance",
            "Turning tiny",
            "Radiation blast"
        ]
    },
    {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
        ]
    }
];
console.log(["powers"][0]);

// ========== Obtaining the JSON ===========
// use an API called XMLHttpRequest (often called XHR).
// very useful JavaScript object that allows us to make network requests to retrieve resources from a server via JavaScript
// (e.g. images, text, JSON, even HTML snippets),
// meaning that we can update small sections of content without having to reload the entire page

// 1 - To start with, we store the URL of the JSON we want to retrieve in a variable.
// Add the following at the bottom of your JavaScript code:
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

// 2 -  To create a request, we need to create a new request object instance from the XMLHttpRequest constructor,
// using the new keyword. Add the following below your last line:
let request = new XMLHttpRequest();

//Now we need to open the request using the open() method. Add the following line:
request.open('GET', requestURL);
// This takes at least two parameters - here are other optional parameters available
// We only need the two mandatory ones for this simple example:
//The HTTP method to use when making the network request. In this case GET is fine,
// as we are just retrieving some simple data.
// The URL to make the request to — this is the URL of the JSON file that we stored earlier.

// ================

// here we are setting the responseType to JSON, so that XHR knows that the server will be returning JSON,
// and that this should be converted behind the scenes into a JavaScript object.
// Then we send the request with the send() method:
request.responseType = 'json';
request.send();

request.onload = function() {
    const superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
};

// Here we are storing the response to our request (available in the response property)
// in a variable called superHeroes;
// this variable now contains the JavaScript object based on the JSON!
// We are then passing that object to two function calls —
// the first one fills the <header> with the correct data,
// while the second one creates an information card for each hero on the team, and inserts it into the <section>.


//=========== Converting between objects and text ========

 // But sometimes we aren't so lucky — sometimes we receive a raw JSON string,
// and we need to convert it to an object ourselves.
// And when we want to send a JavaScript object across the network,
// we need to convert it to JSON (a string) before sending.
// Luckily, these two problems are so common in web development that a built-in JSON object is
// available in browsers, which contains the following two methods:

// parse(): Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.
// stringify(): Accepts an object as a parameter, and returns the equivalent JSON string form.

request.open('GET', requestURL);
request.responseType = 'text'; // now we're getting a string!
request.send();

request.onload = function() {
    const superHeroesText = request.response; // get the string from the response
    const superHeroes = JSON.parse(superHeroesText); // convert it to an object
    populateHeader(superHeroes);
    showHeroes(superHeroes);
};

let myJSON = { "name": "Chris", "age": "38" };
let myString = JSON.stringify(myJSON);
console.log(myString);


















