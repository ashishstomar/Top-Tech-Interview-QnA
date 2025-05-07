function diamondStarPattern(num) {
  starPyramid(num); // Upper half
  invertedStarPyramid(num); // Lower half
}

// Builds the top half of the diamond (including middle line)
function starPyramid(num) {
  for (let i = 0; i < num; i++) {
    let line = "";

    // Print leading spaces
    for (let j = 0; j < num - i - 1; j++) {
      line += " ";
    }

    // Print stars
    for (let j = 0; j < 2 * i + 1; j++) {
      line += "*";
    }

    console.log(line);
  }
}

// Builds the bottom half of the diamond (excluding middle line)
function invertedStarPyramid(num) {
  for (let i = num - 1; i >= 0; i--) {
    let line = "";

    // Print leading spaces
    for (let j = 0; j < num - i - 1; j++) {
      line += " ";
    }

    // Print stars
    for (let j = 0; j < 2 * i + 1; j++) {
      line += "*";
    }

    console.log(line);
  }
}

diamondStarPattern(6);

/*
  Output:
       *
      ***
     *****
    *******
   *********
  ***********
  ***********
   *********
    *******
     *****
      ***
       *
  
  Time Complexity:
  - O(n^2): There are n rows in each half (2n total), and each row may print up to 2n-1 characters.
  
  Space Complexity:
  - O(1) auxiliary space (ignoring output string buffer)
  */
