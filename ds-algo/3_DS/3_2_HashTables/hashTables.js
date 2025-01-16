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

/* Exercise: First Recurring Character */

// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]: 
// It should return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4];
// It should return 1

// Given an array = [2, 3, 4, 5];
// It should return undefined

// Brute-force: nested loops O(n^2)
function firstRecurringCharacterBruteForce(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] === arr[j]) {
        console.log(arr[i])
        return arr[i];
      }
    }
  }
  console.log(undefined);
  return undefined;
}

firstRecurringCharacterBruteForce([2, 5, 3, 5, 6, 6, 5, 2]);

// Using hash tables
function firstRecurringCharacter(arr) {
  // input check
  if (arr.length < 2) {
    return undefined;
  }

  const elements = {};

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    if (elements[currentElement]) {
      console.log(currentElement);
      return currentElement;
    }
    elements[currentElement] = 1;
  }
  console.log('undefined');
  return undefined;
};

firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringCharacter([2, 3, 4, 5]);