/* Given 2 arrays, create a function that lets a user know (true/false) whether these two arrays contain any common items

For example: 
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
should return false;

----------

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
should return true; 

Questions to consider: 
Can we assume there are always 2 params?
*/

// O(m*n)
// naive approach: create nested loops to compare element by element in each array
function containsCommonItemBruteForce(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        console.log('true');
        return true;
      }
    }
  }
  console.log('false');
  return false;
}

// O(m + n) - time complexity
// O(m) - Space complexity
/* notes: 
1. loop through first array and create object (hash) where properties === items in the array
2. loop through second array and check if item in the second array exists on created object
*/
function containsCommonItem(array1, array2) {
  const hash = {};
  for (let i = 0; i < array1.length; i++) {
    if (!hash[array1[i]]) { // check if property already exists
      hash[array1[i]] = true;
    }
  };

  for (let i = 0; i < array2.length; i++) {
    if (hash[array2[i]]) {
      console.log('true');
      return true;
    }
  };
  console.log('false');
  return false;
}

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];

const array3 = ['a', 'b', 'c', 'x'];
const array4 = ['z', 'y', 'x'];

const array5 = ['hello', 'hello', 'world', 'test'];
const array6 = ['hello', 'a', 'b']

containsCommonItem(array1, array2);
containsCommonItem(array3, array4);
containsCommonItem(array5, array6);
// containsCommonItemBruteForce(array5, array6);


// can improve the code to be more readable by using JS built-in methods
function containsCommonItem2(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}

containsCommonItem2(array5, array6);
