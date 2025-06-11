/*
  ✅ Remove duplicates manually
  - Loop through the array and add only unseen elements
*/

function removeDuplicatesManual(arr) {
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

// ✅ Test
console.log(removeDuplicatesManual([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

/*
  ⏱ Time Complexity: O(n²) due to includes()
  💾 Space Complexity: O(n)
*/
