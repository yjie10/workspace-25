/* Doubly Linked List */
// creating a new file so it's not too messy

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;

    this.length++;

    return this;
  }

  append(value) {
    const newNode = new Node(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;

    return this;
  }

  insert(index, value) {
    const newNode = new Node(value);

    if (index === 0) {
      return this.prepend(value);
    }

    const oldNode = this.traverseToIndex(index);
    newNode.next = oldNode;
    newNode.prev = oldNode.prev;
    oldNode.prev.next = newNode;
    oldNode.prev = newNode;

    this.length++;

    return this;
  }

  remove(index) {
    const nodeToRemove = this.traverseToIndex(index);

    nodeToRemove.prev.next = nodeToRemove.next;
    nodeToRemove.next.prev = nodeToRemove.prev;

    this.length--;

    return this;
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
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(11);
myLinkedList.prepend(9);
myLinkedList.printList();
myLinkedList.insert(1, 22);
myLinkedList.printList();
myLinkedList.remove(2); // remove 10
myLinkedList.printList();
console.log(myLinkedList);