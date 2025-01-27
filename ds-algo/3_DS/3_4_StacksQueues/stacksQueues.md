## Data Structures: Stacks and Queues

### Intro

Both Stacks and Queues are **linear data structures** -- which allows traverse (go through data sequentially, one by one) only one data element can be directly reached.

Can be implemented in similar ways, main difference is only how items get removed.

Stacks / Queues are usually only used to access first or last element, and unlike arrays and linked lists, we have less methods we can perform.

Notes: Sometimes it's good to have higher level DS that are built on top of lower level ones like arrays to _limit_ the operations you can perform on them.
That's a benefit, an advantage because there's a control to only use the right operations that are efficient on this DS.

### Stacks

LIFO -- Last In First Out.
Like stacking a pile of plates, can only touch the top plate, and cannot really access anything from the bottom.

Useful when you need to know the last value that was seen or added. e.g. Web browser history; Undo option.

Most programming languages are modeled with the stack architecture in mind.

Big O:
pop O(1)
push O(1)
peek O(1) // view the top most plate
lookup O(n)

### Queues

FIFO -- First In First Out.
As name suggests, a queue, a line.

Queues are used e.g. waitlist apps.

Big O:
enqueue O(1) // push, add to queue
dequeue O(1) // pop, removes the first element
peek O(1)
lookup O(n)

#### How Does JavaScript Work?

What is a program?

- allocate memory, and
- parse and execute.

```
const a = 1; // allocate memory
const b = 10;

console.log('1'); // call stack, reads and executes our stacks

const one = () => {
  const two = () => {
    console.log('4');
  }
  two();
}

console.log('4');
two();
one();
```

Memory leak happens when you have unused variables.

~

JS is single threaded language that can be non-blocking.

**Single threaded** means that it has only _one_ call stack -- doing one thing at a time, FILO.

This is synchronous programming -- code gets executed in order.

Stack overflow -- when memory overflows.

```
// Recursion
function foo() {
  foo();
}

foo();
```

Recursion is when a function calls itself.

~

Asynchronous programming with JS.
e.g. making network requests, API calls, image processing, reading files, etc.

```

console.log('1');
setTimeout(() => {
  console.log('2');
}, 2000);
console.log('3');

setTimeout is essentially a part of the Web APIs, that allows us to do asynchronous programming with JS.

// call stack
// web API
// callback queue
// event loop -- checks if the stack is empty, then checks if there's any callbacks, and puts the callback function into the call stack
```

The 'non-blocking' means in order to not block the single thread (waiting for a big task to finish before executing the next task), it can be asynchronous with callback functions.

### Queues Using Stacks

https://leetcode.com/problems/implement-queue-using-stacks/
https://www.youtube.com/watch?v=eanwa3ht3YQ

### Stacks and Queues Review

Pros:

- Fast Operations
- Fast Peek
- Ordered

Con:

- Slow Lookup
