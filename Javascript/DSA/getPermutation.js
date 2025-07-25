/*
  🔹 Problem: Generate all permutations of an array (with duplicates allowed).

  🔍 Input: [1, 2, 3]
  ✅ Output: [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1]
  ]

  🕒 Time Complexity: O(n!)
  🧠 Space Complexity: O(n) for recursion stack + O(n!) for result storage
*/

function getPermutations(arr) {
  const result = [];

  function permute(current, remaining) {
    if (remaining.length === 0) {
      result.push(current.slice()); // push a copy
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const newCurrent = current.concat(remaining[i]);
      const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
      permute(newCurrent, newRemaining);
    }
  }

  permute([], arr);
  return result;
}

// 🔍 Example usage:
const input = [1, 2, 3];
const allPermutations = getPermutations(input);
console.log(allPermutations);
