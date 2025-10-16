/*
  🧠 Problem Statement:
  ---------------------
  Write a JavaScript function that takes a string as input and returns 
  the number of vowels (a, e, i, o, u) present in it.

  Example:
    Input:  "Interview"
    Output: 4   // (i, e, i, e)

  💡 Explanation:
  - Convert the string to lowercase (to handle uppercase vowels).
  - Check each character — if it's one of the vowels, increase the counter.

  ⚙️ Time Complexity:  O(n)   → We scan each character once.
  💾 Space Complexity: O(1)   → Only a few variables are used.
*/

function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// 🧪 Example usage:
console.log(countVowels("Interview")); // Output: 4
console.log(countVowels("HELLO")); // Output: 2
console.log(countVowels("rhythm")); // Output: 0
