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
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList);