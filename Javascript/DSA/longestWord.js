// Write a function that returns the longest word in the sentence.

var longestWord = function (str) {
  const words = str.replace(/[^a-zA-Z' ']/g, "").split(" ");
  let longest = "";
  for (let i = 0; i < words.length; i++) {
    if (longest.length < words[i].length) {
      longest = words[i];
    }
  }
  return longest;
};

console.log(longestWord("hi bhai what's up"));
