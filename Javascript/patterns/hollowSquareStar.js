/*
  ✅ Print Hollow Square Star Pattern

  For a given number n, print a square of stars where:
  - The first and last rows are completely filled with '*'
  - The middle rows have '*' at the beginning and end only
*/

function hollowSquare(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      // Print '*' for borders, space for inside
      if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}

// ✅ Test
hollowSquare(5);

/*
  Output:
  *****
  *   *
  *   *
  *   *
  *****

  
  ⏱ Time Complexity: O(n²)
  💾 Space Complexity: O(1) (output only)
*/
