function starPyramid(num) {
  // Outer loop for number of rows
  for (let i = 0; i < num; i++) {
    let line = "";

    // Inner loop for spaces before stars
    for (let j = 0; j < num - i - 1; j++) {
      line += " ";
    }

    // Inner loop for stars
    for (let j = 0; j < 2 * i + 1; j++) {
      line += "*";
    }

    // Print the constructed line
    console.log(line);
  }
}

starPyramid(6);

/*
  Output:
       *
      ***
     *****
    *******
   *********
  ***********
  
  Time Complexity:
  - O(n^2): Each of the n rows may build up to ~2n characters.
  Space Complexity:
  - O(1) auxiliary (excluding output string buffer)
  */
