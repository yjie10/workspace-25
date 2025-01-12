const strings = ['a', 'b', 'c', 'd'];
// assumption we can make: 4*4 = 16 bytes of storage in a 32bits systems

strings[2]; // grab the third item from the array: 'c'
console.log('initial strings', strings);

// push -- add item at the end of array
strings.push('e'); // O(1)
console.log('push e', strings);

// pop -- removing the last item from the array
strings.pop(); // O(1) because we are not looping through anything, the computer knows where the last item is stored
console.log('pop 1', strings);

/* add -- add item anywhere in the array */

// unshift -- inserts element(s) at the beginning of the array
strings.unshift('x'); // O(n) because we are performing # of operations depending on the size of the array (shifting and re-aligning the indices)
console.log('unshift x', strings);

// splice -- insert element(s) in the middle of the array
strings.splice(2, 0, 'y'); // O(n) similar to unshift
console.log('splice y w/o deletion', strings);


/* Exercise: Reverse A String */
// Create a function that reverses a string; 

function reverse(str) {
  // input check
  if (!str || str.length < 2 || typeof str !== 'string') {
    return;
  }

  // convert the string into an array first, but ... in JS you can directly loop through a string w/o converting to array
  // const strArray = str.split('');
  let reversedStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr.push(str[i]);
  }
  console.log(reversedStr.join(''));
  return reversedStr.join('');
}

// using JS method
function reverseJS(str) {
  const reversedStr = str.split('').reverse().join('');
  console.log(reversedStr);
  return reversedStr;
}

reverse('Hello World');
reverseJS('Reverse String Using JS Method');

// One-liner using ES6 feature
const reverseOneLine = str => str.split('').reverse();

/* Exercise: Merge Sorted Arrays */
// [0, 3, 4, 31], [4, 6, 30]

function mergeSortedArrays(arr1, arr2) {
  // Q: Can I assume both arrays consists of numbers only, and it is always sorted? 

  // input check for empty arrays
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  const mergedArray = [];
  const totalLength = arr1.length + arr2.length;
  let p1 = 0, p2 = 0;

  while (p1 + p2 < totalLength) {
    if (arr1[p1] <= arr2[p2] || p2 === arr2.length) {
      mergedArray.push(arr1[p1]);
      p1++;
    } else {
      mergedArray.push(arr2[p2]);
      p2++;
    }
  }
  console.log(mergedArray);
  return mergedArray;
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
mergeSortedArrays([3, 4, 31], [4, 6, 30]);
mergeSortedArrays([4, 6, 30], [0, 3, 4, 31, 46, 74]);

function mergeSortedArraysZTM(arr1, arr2) {
  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1, j = 1;

  // input check for empty arrays
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  // can break these steps into even smaller function
  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    }
    else {
      mergedArray.push(arr2Item);
      arr2Item = arr2Item[j];
      j++;
    }
  }
  console.log(mergedArray);
  return mergedArray;
}