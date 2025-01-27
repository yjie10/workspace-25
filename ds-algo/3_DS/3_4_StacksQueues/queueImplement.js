// Queues: can build with either arrays linked-lists
// arrays: not efficient because dequeue (removing first element) requires unshifting
// linked-lists: easier to implement as we know this.head

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    if (!this.isEmpty()) {
      console.log(this.first);
      return this.first;
    }
    console.log('Empty Queue');
    return null;

    // return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);

    // if queue is initially empty

    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    // if the queue is empty
    if (this.isEmpty()) {
      console.log('Empty Queue');
      return null;
    }

    // if the queue only contains one item
    if (this.first === this.last) {
      this.last = null;
    }

    const itemToDequeue = this.first;
    this.first = this.first.next;

    this.length--;
    return itemToDequeue;
  }

  isEmpty() {
    if (this.length) {
      return false;
    }
    return true;
  }
}

const myQueue = new Queue();
myQueue.enqueue('ItemOne');
myQueue.enqueue('ItemTwo');
myQueue.enqueue('ItemThree');
myQueue.peek();
myQueue.dequeue();
myQueue.peek();
// myQueue.dequeue();
// myQueue.dequeue();
console.log(myQueue);

// woah这是我的思路和instructor最像的一次！
