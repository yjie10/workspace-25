// reference type 

var object1 = { value: 10 }; // storing an address
var object2 = object1;
var object3 = { value: 10 }; // storing another address

object1 === object2 // true
object1 === object3 // false

// objects are reference types in JS, they are NOT a primitive type -- not defined by programming languages (created by programmer)

// context
// gets confused a lot with scope
function scope() { // new scope is created when a new function is created
  let a = 'a';
  console.log(a);
} // will throw reference error if we try to call _a_ outside of the function (its scope, its own universe)

// context tells you where we are within the object
console.log(this); // what is the object environment we are in right now? 
// e.g. logging _this_ in browser will return the window object

// context is important when it comes to instantiation -- when making a copy of an object and reuse the code

// instantiation
// making instances or multiple copies of an object
class Player {
  // constructor gets called first when creating the object, and it creates the properties on the Player object
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I am ${this.name}, I am a ${this.type}.`);
  }
}

class Wizard extends Player { // want to add on top to what Player class has
  constructor(name, type) {
    super(name, type); // used when extending a class so you have access to the properties of the initial class
  }
  play() {
    console.log(`WEEEEE I'm a ${this.type}!`);
  }
}

const player1 = new Wizard('Riyo', 'Healer');
const player2 = new Wizard('yori', 'Witch');

console.log(player1.introduce());
console.log(player2.play());
