var isAnagram = function (s, t) {
  function cleanString(string) {
    return string
      .replace(/[^a-zA-Z0-9]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
  }

  const stringS = cleanString(s);
  const stringT = cleanString(t);

  console.log(stringS);
  console.log(stringT);

  return stringS === stringT;
};

console.log(isAnagram("anagram", "naagram"));
