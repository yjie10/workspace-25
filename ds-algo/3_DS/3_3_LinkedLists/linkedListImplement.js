// 10 --> 5 --> 16
/*
let myLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5, 
      next: {
        value: 16, 
        next: null
      }
    }
  },
}
*/

// good practice for writing dry code -- don't repeat
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  // constructor is all about creating the very first linked list node
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // const newNode = {
    //   value: value,
    //   next: null
    // };
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    // const newNode = {
    //   value: value,
    //   // next: this.head
    //   next: null
    // };
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr);
    return arr;
  }

  insert(index, value) {
    // check params
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    let currentNode = this.head;

    if (index === 0) {
      this.prepend(value);
    }

    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    const nextNode = currentNode.next;
    currentNode.next = newNode;
    newNode.next = nextNode;
    this.length++;

    return this;
  }

  insertZTM(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    if (index === 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);
    let leader = this.traverseToIndex(index - 1);
    const aft = leader.next;
    leader.next = newNode;
    newNode.next = aft;
    this.length++;
    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
    } else {
      const prev = this.traverseToIndex(index - 1);
      const nodeToRemove = prev.next;
      prev.next = nodeToRemove.next;
    }

    this.length--;
    return this;
  }

  reverseZTM() {
    // length check
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;

    return this;
  }

  reverse() {
    let prev = null;
    let curr = this.head;

    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.tail = this.head;
    this.head = prev;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(1, 6);
myLinkedList.printList();
// myLinkedList.insertZTM(0, 0);
// myLinkedList.printList();
myLinkedList.remove(1);
myLinkedList.printList();
// myLinkedList.reverseZTM();
myLinkedList.reverse();
myLinkedList.printList();
myLinkedList.reverse();
myLinkedList.printList();
console.log(myLinkedList);
