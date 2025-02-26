var isPalindrome = function (s) {
  const cleanStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] != cleanStr[right]) {
      console.log("NOT a Palindrome");
      return;
    }

    left++;
    right--;
  }
  console.log("It's a Palindrome");
};

isPalindrome("level");
