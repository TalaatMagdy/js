// create new object
// const person = {};

// contain of object key value
const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
        console.log(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
        console.log('Hi! I\'m ' + this.name[0] + '.');
    }
};
// ==================== Dot not notation ============
// Access item of object  use Dot notation
console.log(person.name);
console.log(person.name[0]);
console.log(person.age);
console.log(person.interests[1]);
console.log(person.bio());
console.log(person.greeting());

// best practise convert
//name: ['Bob', 'Smith']
//to
// name : {
//   first: 'Bob',
//   last: 'Smith'
// },

// to do notation for access
//person.name.first
// person.name.last

// ==================== Bracket notation ============
//There is another way to access object properties — using bracket notation. Instead of using these:

//person.age
// person.name.first

//person['age']
// person['name']['first']


// ==== notes  Object is called associative arrays =====

// update value of properties
person.age = 45;
person['name']['last'] = 'Cratchit';

// create new properties
person['eyes'] = 'hazel';
person.farewell = function() { console.log("Bye everybody!"); }


// ======= What is "this"? =========
// in Person Object have
//greeting: function() {
//   alert('Hi! I\'m ' + this.name.first + '.');
// }

// The this keyword refers to the current object the code is being written inside —
// so in this case this is equivalent to person

// when we start creating constructors and so on, this is very useful

const person1 = {
    name: 'Chris',
    greeting: function() {
        alert('Hi! I\'m ' + this.name + '.');
    }
};

const person2 = {
    name: 'Deepti',
    greeting: function() {
        alert('Hi! I\'m ' + this.name + '.');
    }
};

// In this case, person1.greeting() outputs "Hi! I'm Chris.";
// person2.greeting() on the other hand outputs "Hi! I'm Deepti.",