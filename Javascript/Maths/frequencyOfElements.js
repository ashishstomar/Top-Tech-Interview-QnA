/*
  ✅ Problem Statement:
  Write a program to count and print the frequency of each element in an array.

  ➤ Example:
    Input:  [1, 2, 2, 3, 4, 4, 4]
    Output:
      { '1': 1, '2': 2, '3': 1, '4': 3 }
*/

function frequency(arr) {
  // Create an empty object to store element frequencies
  const freqMap = {};

  // Loop through each element of the array
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    // If element already exists in the map, increment its count
    if (freqMap[element]) {
      freqMap[element]++;
    } else {
      // Otherwise, initialize the count to 1
      freqMap[element] = 1;
    }
  }

  return freqMap;
}

// ✅ Test
console.log(frequency([1, 2, 2, 3, 4, 4, 4]));

/*
  🧠 Time Complexity: O(n)
     - One pass to build the frequency map.

  💾 Space Complexity: O(n)
     - In the worst case, every element is unique and stored in the map.
*/
