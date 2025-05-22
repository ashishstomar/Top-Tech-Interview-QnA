/*
  ✅ Problem Statement:
  Write a JavaScript function to randomly shuffle the elements of an array.

  ➤ Example:
    Input:  [1, 2, 3, 4, 5]
    Output: [3, 1, 5, 2, 4]  // (order will vary on each execution)

  ✅ Approach:
  Use the Fisher-Yates Shuffle algorithm:
    - Start from the end of the array.
    - Swap the current element with a randomly chosen element from earlier in the array (or itself).
    - Ensures uniform random distribution (no bias).
*/

function shuffleArray(arr) {
  // Start from the last element and swap with a random earlier element
  for (let i = arr.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    let j = Math.floor(Math.random() * (i + 1));

    // Swap elements at i and j
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  // Return the shuffled array
  return arr;
}

// ✅ Test Case
let originalArray = [1, 2, 3, 4, 5];
console.log("Original:", originalArray.slice()); // Copy to preserve original
console.log("Shuffled:", shuffleArray(originalArray));

/*
  🧠 Time Complexity: O(n)
     - Each element is visited once and possibly swapped.

  💾 Space Complexity: O(1)
     - In-place shuffling, no extra space used.
*/
