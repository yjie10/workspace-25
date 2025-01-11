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
