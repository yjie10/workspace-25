let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function () {
    console.log('Ahhhhh!');
  }
}

// JS notes: In JS, if a number is used as the key, it gets stringified
// Only strings are allowed to be used as key

user.age // O(1)
user.spell = 'Abrakadabra!' // O(1)
user.scream(); // O(1)

// JS notes: With map, JS allows you to save _any_ datatype as the key (including arrays / functions as key)
// With map, insertions are in order
const newMap = new Map();

// JS notes: Sets are similar to maps, but only stores keys, no values
const newSet = new Set();

