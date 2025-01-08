/*
// What is Good Code? 
// an instruction we gave to the computer to 'find nemo'
const nemo = ['nemo'];

const { performance } = require('perf_hooks'); // need to import in non-browser env

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
  let t1 = performance.now();
  console.log('Call to find Nemo' + (t1 - t0) + ' miliseconds');
}

findNemo(nemo);
*/

/* Big O and Scalability */

// having more items in the array requires more loops to run through the array, increasing runtime
// but time difference between running 1 loop vs. 10 loops is very minimal, 几乎可以忽略不计
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100).fill('nemo'); // bigger the array, runtime increase

const { performance } = require('perf_hooks'); // need to import in non-browser env

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
  let t1 = performance.now();
  console.log('Call to find Nemo' + (t1 - t0) + ' miliseconds');
}

// findNemo(everyone);
findNemo(large); // O(n)

// instead of measuring time (since time can be different across different machines), measure using the # of operations it has to perform