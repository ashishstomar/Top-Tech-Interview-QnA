function theNumberPattern(num) {
  // Total rows and columns in the square grid: (2 * num - 1)
  let size = 2 * num - 1;

  // Loop through each row
  for (let i = 0; i < size; i++) {
    let line = "";

    // Loop through each column
    for (let j = 0; j < size; j++) {
      // Calculate the minimum distance from all four edges
      let top = i;
      let left = j;
      let right = size - 1 - j;
      let bottom = size - 1 - i;

      // Minimum of distances from four edges
      let minDist = top;
      if (left < minDist) minDist = left;
      if (right < minDist) minDist = right;
      if (bottom < minDist) minDist = bottom;

      // Value at the cell is (num - minDist)
      line += num - minDist + " ";
    }

    console.log(line); // Print the row
  }
}

theNumberPattern(5);

/*
  Output:
  5 5 5 5 5 5 5 5 5
  5 4 4 4 4 4 4 4 5
  5 4 3 3 3 3 3 4 5
  5 4 3 2 2 2 3 4 5
  5 4 3 2 1 2 3 4 5
  5 4 3 2 2 2 3 4 5
  5 4 3 3 3 3 3 4 5
  5 4 4 4 4 4 4 4 5
  5 5 5 5 5 5 5 5 5
  
  Time Complexity:
  - O(n^2): for each of the (2n - 1) rows and (2n - 1) columns, we do constant-time computation.
  
  Space Complexity:
  - O(1): only uses primitive variables and one string for output per line.
  */
