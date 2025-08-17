/*
  ✅ Concept: class & extends in JavaScript
  
  - `class` is syntactic sugar over constructor functions + prototypes.
  - `extends` lets one class inherit from another.
  - `super` is used:
      • inside the constructor → to call the parent class constructor
      • inside methods → to call parent methods
  
  Inheritance chain:
  Dog → Animal → Object

  📦 Benefit: Code reuse, method overriding, polymorphism
*/

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound 🐾`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // ✅ calls Animal's constructor
    this.breed = breed;
  }

  // Method overriding
  speak() {
    super.speak(); // ✅ call parent method first
    console.log(`${this.name} barks! 🐶`);
  }
}

/* ---------------- Demo ---------------- */
const animal = new Animal("Generic Animal");
animal.speak();
// Output: Generic Animal makes a sound 🐾

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak();
// Output: Buddy makes a sound 🐾
//         Buddy barks! 🐶

console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true (inherited)
