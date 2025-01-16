class HashTable {
  constructor(size) {
    this.data = new Array(size); // [[key, value]]
  }
  _hash(key) { // stands for private property; it can still be accessed outside of this class, but just a developer standard for writing JS
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);

    if (this.data[address]) {
      for (let i = 0; i < this.data.length; i++) {
        if (!this.data[i]) {
          address = i;
          break;
        }
      }
    }

    this.data[address] = [key, value];
    console.log(this.data);
    return address;
  }

  get(key) {
    const address = this._hash(key);
    let hashBucket = this.data[address];

    if (hashBucket[0] !== key) {
      for (let i = 0; i < this.data.length; i++) {
        if (this?.data[i]?.[0] === key) {
          hashBucket = this.data[i];
        }
      }
    }
    console.log(hashBucket[1]);
    return hashBucket[1]; // O(1) if no collisions
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      const currentBucket = this.data[i];
      if (currentBucket) {
        keys.push(currentBucket[0]);
      }
    }
    console.log(keys);
    return keys;
  }


  /* ZTM solution */

  setZTM(key, value) {
    let address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]); // chaining ...
    console.log(this.data)
    return this.data;
  }

  getZTM(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keysZTM() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10);
// myHashTable.setZTM('grapes', 10);
myHashTable.set('apples', 20);
myHashTable.set('oranges', 30);
myHashTable.set('bananas', 40);
// myHashTable.setZTM('bananas', 40);
myHashTable.set('strawberries', 50);
myHashTable.set('coconut', 60);
myHashTable.set('pears', 70);

myHashTable.get('grapes');
myHashTable.get('apples');
myHashTable.get('oranges');
myHashTable.get('bananas');
myHashTable.get('strawberries');
myHashTable.get('coconut');
myHashTable.get('pears');

myHashTable.keys();