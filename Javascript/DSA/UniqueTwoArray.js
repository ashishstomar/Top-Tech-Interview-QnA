/*
🔹 Problem Statement:
Given two arrays `arr1` and `arr2`, find all elements that are unique to either array.
That is, return elements that are present in one array but not the other.

📌 Example:
Input:
  arr1 = [1, 2, 3, 4]
  arr2 = [3, 4, 5, 6]

Output:
  [1, 2, 5, 6]

✅ Constraints:
- Arrays can contain integers.
- Elements should be compared by value.
- Duplicates within each array should not affect the output.

🧠 Approach:
1. Use Sets to store unique elements from each array.
2. Loop through both sets and collect elements not found in the other.
3. Return the combined result.

🕒 Time Complexity: O(n + m)
🧠 Space Complexity: O(n + m)
*/

function findUniqueElements(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const result = [];

  // Elements in set1 not in set2
  for (const item of set1) {
    if (!set2.has(item)) result.push(item);
  }

  // Elements in set2 not in set1
  for (const item of set2) {
    if (!set1.has(item)) result.push(item);
  }

  return result;
}

// 🔍 Example usage:
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
console.log(findUniqueElements(arr1, arr2)); // Output: [1, 2, 5, 6]
