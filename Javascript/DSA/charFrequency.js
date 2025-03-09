// Character Frequency Counter

var charFrequency = function (s) {
  // Filter only alphanumeric characters and convert to lowercase
  const str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Create frequency object using character codes for initialization
  const freq = {};
  for (const char of str) {
    // Initialize count if undefined
    freq[char] = (freq[char] || 0) + 1;
  }

  // Convert to array of "char:count" strings and join
  return Object.entries(freq)
    .map(([k, v]) => `${k}:${v}`)
    .join(", ");
};

console.log(charFrequency("hello world!")); // Output: "h:1, e:1, l:3, o:2, w:1, r:1, d:1"
