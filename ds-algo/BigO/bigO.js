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

/* Big O and Scalability

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

*/

/* Exercise 1

// What is the Big O of the below function? (Hint, you may want to go line by line)
// ~符号：看solution视频的时候补上的
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // ~ O(n)
    let stranger = true; // ~ O(n)
    a++; // ~(n)
  }
  return a; // ~ O(1)
}

// initial answer: O(n)
// solution: O(3 + 4n) gets simplified to O(n)

*/

/* Exercise: Twitter */

// 题: Retrieve newest and oldest tweet

// Find 1st, Find nth ...
const array = ['hi', 'my', 'teddy'];

array[0] // oldest tweet
array[array.length - 1]; // newest tweet

// O(1)

// 新题: Compare the dates of tweets, 1 by 1
const tweets = [
  {
    tweet: 'hi',
    date: 2012
  },
  {
    tweet: 'my',
    date: 2014
  },
  {
    tweet: 'teddy',
    date: 2018
  }
];
// Nested loops: O(n^2)

