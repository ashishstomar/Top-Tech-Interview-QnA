/*
  🔹 Problem Statement:
  Write a JavaScript program to flatten a nested (any depth) array.
  If a `shallow` flag is passed as true, the array should only be flattened to a single level.

  🔍 Examples:
  flatten([1, [2, [3, [4]]]], false) ➞ [1, 2, 3, 4]
  flatten([1, [2, [3, [4]]]], true)  ➞ [1, 2, [3, [4]]]

  🕒 Time Complexity:
  - Deep flatten: O(n), where n is the total number of elements including nested ones
  - Shallow flatten: O(n), single level only

  🧠 Space Complexity: O(n)
*/

function flatten(array, shallow = false) {
  if (shallow) {
    // Flatten one level deep
    return array.reduce((acc, val) => acc.concat(val), []);
  } else {
    // Deep flatten recursively
    return array.reduce(
      (acc, val) =>
        Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val),
      []
    );
  }
}

// 🔍 Example usage:
const nestedArray = [1, [2, [3, [4, [5]]]]];

console.log("Shallow:", flatten(nestedArray, true)); // [1, 2, [3, [4, [5]]]]
console.log("Deep   :", flatten(nestedArray)); // [1, 2, 3, 4, 5]
