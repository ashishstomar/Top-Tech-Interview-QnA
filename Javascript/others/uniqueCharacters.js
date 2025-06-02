/*
  ✅ Problem Statement:
  Write a JavaScript function to return a string containing only 
  the unique characters from a given string, preserving the order 
  of their first appearance.

  ➤ Example:
    Input:  "programming"
    Output: "progamin"
*/

function uniqueCharacters(str) {
  const seen = {}; // Object to track characters we've already added
  let result = ""; // String to store unique characters in order

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // If character has not been seen before
    if (!seen[char]) {
      result += char; // Add to result
      seen[char] = true; // Mark as seen
    }
  }

  return result; // Return the final string of unique characters
}

// ✅ Test Case
console.log(uniqueCharacters("programming")); // Output: "progamin"

/*
  ⏱ Time Complexity: O(n)
     - We scan the string once and perform constant-time operations

  💾 Space Complexity: O(k)
     - Where k is the number of unique characters (at most 26 for lowercase English letters)
*/
