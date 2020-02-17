//========== encapsulated ==============
// represent information about the thing you are trying to model,
// and functionality or behavior that you want it to have

// ========== namespace ==============
//which can be given a specific name to refer to

// ======== abstraction ===========
// creating a simple model of a more complex thing,
// which represents its most important aspects in a way that is easy to work with for our program's purposes.

// ========== instantiation ========
//This process of creating an object instance from a class
// steps
// When an object instance is created from a class,
// the class's constructor function is run to create it.

// =========== inherit ===========
//create new classes based on other classes — these new child classes
// can be made to inherit the data and code features of their parent class,


function createNewPerson(name) {
    const obj = {};
    obj.name = name;
    obj.greeting = function() {
        console.log('Hi! I\'m ' + obj.name + '.');
    };
    return obj;
}

// create a new person by calling this function
// const salva = createNewPerson('Salva');
// salva.name;
// salva.greeting()

//why do we need to explicitly create a new empty object and return it
// replace above to

// ============ constructor function =============
// name usually starts with a capital letter
function Persons(name) {
    this.name = name;
    this.greeting = function() {
        console.log('Hi! I\'m ' + this.name + '.');
    };
}

//  how do we call a constructor to create some objects?
//the new keyword is used to tell the browser we want to create a new object instance,
let person1 = new Persons('Bob');
let person2 = new Persons('Sarah');

// access different object
console.log(person1.name)
console.log(person1.greeting())
console.log(person2.name)
console.log(person2.greeting())

//After the new objects have been created, the person1 and person2 variables contain the following objects:

//{
//   name: 'Bob',
//   greeting: function() {
//     alert('Hi! I\'m ' + this.name + '.');
//   }
// }
//
// {
//   name: 'Sarah',
//   greeting: function() {
//     alert('Hi! I\'m ' + this.name + '.');
//   }
// }

//Note that when we are calling our constructor function, we are defining greeting() every time,
// which isn't ideal. To avoid this, we can define functions on the prototype instead, which we will look at later.

// ======= Full  constructor function ========

function Person(first, last, age, gender, interests) {
    this.name = {
        first : first,
        last : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
        alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
        alert('Hi! I\'m ' + this.name.first + '.');
    };
}

let new_person = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

// ======= Other ways to create object instances ==========

// ==== The Object() constructor ===
//you can use the Object() constructor to create a new object.
// Yes, even generic objects have a constructor, which generates an empty object.

let person1 = new Object();
person1.name = 'Chris';
person1['age'] = 38;
person1.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
};


// ======== Using the create() method ========
let person2 = Object.create(person1);
person2.name;
person2.greeting