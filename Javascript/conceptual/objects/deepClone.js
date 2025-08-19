/*
❓ Problem Statement:
Write a function deepClone(obj) that creates a deep copy of any JavaScript object.
It should:
1. Handle nested objects & arrays.
2. Handle special objects like Date and RegExp.
3. Handle circular references without crashing.

⚡ Complexity:
- Time: O(n) where n = number of keys in the object.
- Space: O(n) for recursion + WeakMap storage.
*/

function deepClone(obj, hash = new WeakMap()) {
  // Base case: handle null, undefined, primitive types
  if (obj === null || typeof obj !== "object") return obj;

  // Handle circular references
  if (hash.has(obj)) return hash.get(obj);

  // Handle Date
  if (obj instanceof Date) return new Date(obj);

  // Handle RegExp
  if (obj instanceof RegExp) return new RegExp(obj);

  // Handle Array
  if (Array.isArray(obj)) {
    const arrCopy = [];
    hash.set(obj, arrCopy);
    obj.forEach((item, i) => {
      arrCopy[i] = deepClone(item, hash);
    });
    return arrCopy;
  }

  // Handle Object
  const cloneObj = {};
  hash.set(obj, cloneObj);
  Object.keys(obj).forEach((key) => {
    cloneObj[key] = deepClone(obj[key], hash);
  });

  return cloneObj;
}

// ----------------------
// ✅ Example Usage
// ----------------------
const obj = {
  name: "Alice",
  meta: { age: 25, hobbies: ["reading", "coding"] },
  date: new Date(),
};

obj.self = obj; // Circular reference

const cloned = deepClone(obj);
console.log(cloned);
console.log(cloned.meta.hobbies); // ["reading", "coding"]
console.log(cloned.self === cloned); // true (circular preserved, not infinite loop!)
