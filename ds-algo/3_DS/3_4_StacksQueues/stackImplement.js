// Stacks: can build it with either arrays or linked lists
// arrays: easier pop, append, simpler to implement
// linked-lists: eaiser pop, append and can access last element even if you don't know the length, as long as we know this.tail

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackLinkedLists {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    // params check
    if (this.isEmpty()) {
      console.log('Empty Stack');
      return;
    }
    console.log(this.top);
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    // if empty stack
    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  }

  pop() {
    // if empty stack
    if (this.isEmpty()) {
      console.log('Empty Stack');
      return;
    }

    // if only one element
    if (this.top === this.bottom) {
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length--;
    return this;
  }

  isEmpty() {
    if (!this.bottom) {
      return true;
    }
  }
}

const myStack = new StackLinkedLists();
myStack.push('historyOne');
myStack.push('historyTwo');
myStack.push('historyThree');
myStack.peek();
myStack.pop();
// myStack.pop();
// myStack.pop();
console.log(myStack);


class StackArrays {
  constructor() {
    this.stack = [];
  }

  peek() {
    if (this.stack.length) {
      console.log(this.stack[this.stack.length - 1]);
      return this.stack[this.stack.length - 1];
    }
  }

  push(value) {
    this.stack.push(value);
    return this;
  }

  pop() {
    this.stack.pop();
    return this;
  }
}

const myStackTwo = new StackArrays();
myStackTwo.push('itemOne');
myStackTwo.push('itemTwo');
myStackTwo.peek();
myStackTwo.pop();
console.log(myStackTwo);
