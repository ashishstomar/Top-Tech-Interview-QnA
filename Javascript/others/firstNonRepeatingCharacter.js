// Problem: Find the first non-repeating character in a given string.
// If all characters repeat, return an empty string or appropriate message.

// Example:
// Input: "aabbcddcef"
// Output: "e"  (since 'e' is the first character that doesn't repeat)

function firstNonRepeatingCharacter(str) {
  // Object to store frequency of each character
  const charFrequency = {};

  // Count the frequency of each character in the string
  for (let char of str) {
    if (charFrequency[char]) {
      charFrequency[char]++;
    } else {
      charFrequency[char] = 1;
    }
  }

  // Iterate again to find the first character with frequency 1
  for (let char of str) {
    if (charFrequency[char] === 1) {
      return char;
    }
  }

  // If no non-repeating character is found
  return "";
}

console.log(firstNonRepeatingCharacter("aabbcddcef")); // Output: e
console.log(firstNonRepeatingCharacter("aabbcc")); // Output: ""
