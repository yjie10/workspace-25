// Implementing an Array

// JS Notes: Arrays in JS are just objects with integer based keys that act like indices

class MyArray {
  constructor() {
    this.length = 0; // the length of the array, initially 0
    this.data = {};
  }

  get(index) { // access the element
    return this.data[index];
  }

  push(item) { // add an element
    this.data[this.length] = item;
    this.length++;
    return this.length; // typical push method in JS will return the length of the array
  }

  pop() { // delete the last element
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem; // typical pop method in JS returns the deleted element
  }

  // my implementation
  delete(index) {
    const itemToDelete = this.data[index];
    for (let i = index; i < this.length; i++) { // Note: Best practice here is to write the shifting items in another function
      this.data[i] = this.data[i + 1];
    }
    // need to delete the item once everything shifts over, and decrement the length
    delete this.data[this.length - 1];
    this.length--;
    return itemToDelete;
  }

  deleteZTM(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) { // O(n) linear time
    for (let i = index; i < this.length; i++) {
      this.daya[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push('hello');
newArray.push('!');
newArray.push('world');
console.log('push 3', newArray);
// newArray.pop();
// console.log('pop 1', newArray);
newArray.delete(1);
console.log(newArray);
