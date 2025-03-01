//Write a function that returns the number of vowels in a string.

var vowels = function (str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
};

console.log(vowels("helloaduo"));
