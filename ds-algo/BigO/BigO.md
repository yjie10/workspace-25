## Big O

### What is good code?

@findNemo.js

What is good code?

1. Readable
2. Scalable (Big O)

### Big O and Scalability

**Big O** notation is the language we use for talking about how long an algorithm takes to run. Big O doesn't measure things in seconds, instead we are focusing on how quickly our runtime grows.
Scalable code is code that gives ~same performance no matter how big the input gets (or changes) -- code that can scale.

### O(n)

O(n) aka linear time. Meaning the big O depends on the number of inputs.

### O(1)

O(1) aka constant time.

```
function compressFirstBox(boxes) {
  console.log(boxes[0]);
}
```

The above code will always perform 1 operation on the first element of the array -- the number of operations remains the same (flat/constant) _no matter_ how big the input gets.
以下 example 同理。

```
function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes) // O(1) + O(1) = O(2) still constant time
```

### Simplifying Big O

4 rules to simplify big O:

Rule 1: Worst Case
Rule 2: Remove Constants
Rule 3: Different terms for inputs
Rule 4: Drop Non Dominants

### Rule 1: Worst Case

Always consider the worst case scenario -- say for item search, if looping array in order, worst case scenario is it's the last item in the array.

### Rule 2: Remove Constants

Say O(1 + n/2 + 100) will be simplified to O(n) -- dropping 101 and 1/2 because as n gets larger, the constants will become more and more insignificant.

### Rule 3: Different terms for inputs

```
function compressBoxesTwice(boxes1, boxes2) {
  boxes1.forEach(function(boxes)) {
    console.log(boxes);
  };

  boxes2.forEach(function(boxes)) {
    console.log(boxes)
  }
}
```

The above big O is **not** O(n) because there are 2 inputs that can have very different length.
The big O will be O(a + n) or O(m + n) or O(boxes1 + boxes2) etc.

### Rule 4: Drop Non Dominants

```
numbers.forEach(function(number) {
  console.log(number);
})

numbers.forEach(function(firstNumber) {
  numbers.forEach(function(secondNumber) {
    console.log(firstNumber + secondNumber);
  })
})
```

Say above in a function, the big O is O(n + n^2) which simplifies to O(n^2), dropping non-dominant terms.

### O(n^2)

```
// log all pairs of array
const boxes = ['a','b','c','d','e'];

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray(boxes)
```

Nested loops results in multiplication. The big O of the above function is O(n^2).

### 3 Pillars of Programming

1. Readable
2. Memory (part of Scalable) -- Space Complexity
3. Speed (part of Scalable) -- Time Complexity

### Space Complexity

When a program executes, it has two ways to remember things -- **1. Heap** and **2. Stack**.

Heap: assigning variables;
Stack: where we keep track of function calls;

```
function boo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('boo');
  }
}

boo([1,2,3,4,5]) // O(1) -- no additional space are taken
```

Consider: Are additional space taken?

### JS Length

.length of a string can have different big O depending on the language.
.length property is built-in in JS, .length is a simple lookup, which the big O is O(1).

### JavaScript Loops

forEach loop;

```
const findNemo = array => {
  array.forEach(fish => {
    if (fish === 'nemo') {
      console.log('found NEMO!');
    }
  })
};
```

for of loop;

```
const findNemo = array => {
  for(let fish of array) {
    if (fish === 'nemo) {
      console.log('found NEMO!');
    }
  }
};
```

## Section Summary

Big O is used to describe how efficient (time / space) we can run our code.

There's usually a trade-off between speed (time) and memory (space), big O describes the upper bound (worst case scenario) of our estimates.

What is good code? -- Consider both 1. Readable and 2. Scalable.
Sometimes, maybe readability matters more than scalability; maybe time complexity is less important than space complexity.

_——「Premature optimization can be the root of all evil. 」_
