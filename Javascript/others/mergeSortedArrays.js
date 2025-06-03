/*
  ✅ Problem Statement:
  Write a function that merges two sorted arrays into one sorted array
  without using any built-in sorting functions.

  ➤ Example:
    Input: [1, 3, 5], [2, 4, 6]
    Output: [1, 2, 3, 4, 5, 6]
*/

function mergeSortedArrays(arr1, arr2) {
  const merged = []; // Result array
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2

  // Traverse both arrays until one is exhausted
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // Append any remaining elements from arr1
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  // Append any remaining elements from arr2
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

// ✅ Test Case
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]

/*
  ⏱ Time Complexity: O(n + m)
     - Where n is the length of arr1 and m is the length of arr2

  💾 Space Complexity: O(n + m)
     - We create a new array to hold all elements
*/
