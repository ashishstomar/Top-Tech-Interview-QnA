/*
  ✅ Problem Statement:
  Write a function that takes a nested array and returns a new array that is flattened (no nesting).

  ➤ Example:
    Input:  [1, [2, [3, [4]], 5]]
    Output: [1, 2, 3, 4, 5]

  ✅ Approach:
    - Use recursion to check if each element is an array.
    - If it is, recursively flatten it.
    - If not, add it to the result.
*/

function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    // If the current element is an array, flatten it recursively
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]));
    } else {
      // If it's a value, add it to the result
      result.push(arr[i]);
    }
  }

  return result;
}

// ✅ Test Cases
console.log(flattenArray([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]
console.log(flattenArray([[1], [2, 3], [4, [5]]])); // [1, 2, 3, 4, 5]
console.log(flattenArray([])); // []

/*
  🧠 Time Complexity: O(n)
     - Where n is the total number of non-array elements in the nested structure.

  💾 Space Complexity: O(n)
     - For storing the flattened array.
*/
