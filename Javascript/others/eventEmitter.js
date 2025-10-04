/*
📌 Problem: Implement an EventEmitter (with `.once()`)

🧩 Description:
You need to design a simple EventEmitter class that supports:
  - `.on(eventName, callback)` → register a persistent listener.
  - `.once(eventName, callback)` → register a listener that triggers only once.
  - `.off(eventName, callback)` → remove a listener.
  - `.emit(eventName, ...args)` → trigger all listeners for the event.

💡 Example:
----------------------------------------------------------
const emitter = new EventEmitter();

function greet(name) {
  console.log("Hello", name);
}

function welcome(name) {
  console.log("Welcome", name);
}

emitter.on("greet", greet);
emitter.once("greet", welcome);

emitter.emit("greet", "Alice");
// Output: Hello Alice
//         Welcome Alice

emitter.emit("greet", "Bob");
// Output: Hello Bob
// (Welcome is NOT called again because it was once)
----------------------------------------------------------

🎯 Concepts Tested:
- Closures
- Higher-order functions
- Data structure design (map of arrays)
- Function reference comparison for `.off()`

----------------------------------------------------------
*/

class EventEmitter {
  constructor() {
    this.events = {}; // eventName → [list of callbacks]
  }

  // Register a listener
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  // Register a listener that triggers only once
  once(eventName, callback) {
    const wrapper = (...args) => {
      callback(...args); // Call original listener
      this.off(eventName, wrapper); // Remove after first execution
    };
    this.on(eventName, wrapper);
  }

  // Remove a specific listener
  off(eventName, callback) {
    if (!this.events[eventName]) return;

    this.events[eventName] = this.events[eventName].filter(
      (listener) => listener !== callback
    );
  }

  // Trigger all listeners for an event
  emit(eventName, ...args) {
    if (!this.events[eventName]) return;

    this.events[eventName].forEach((listener) => listener(...args));
  }
}

// 🧪 Example Usage:
const emitter = new EventEmitter();

function greet(name) {
  console.log("👋 Hello", name);
}

function onceGreet(name) {
  console.log("🎉 Nice to meet you,", name);
}

emitter.on("hello", greet);
emitter.once("hello", onceGreet);

emitter.emit("hello", "Alice");
// 👋 Hello Alice
// 🎉 Nice to meet you, Alice

emitter.emit("hello", "Bob");
// 👋 Hello Bob
// (onceGreet not called again)

/*
----------------------------------------------------------
🧠 Time & Space Complexity:
----------------------------------------------------------
- on(event):   O(1)
- once(event): O(1)
- off(event):  O(n)
- emit(event): O(n)
Space: O(n) — stores callbacks per event.

✅ Common Follow-ups:
1️⃣ Support wildcard events like `*` or namespace-based events.
2️⃣ Add async emit() that awaits all listener Promises.
3️⃣ Prevent duplicate listener registration.
4️⃣ Add `.removeAll(eventName)` to clear all listeners.
----------------------------------------------------------
*/
