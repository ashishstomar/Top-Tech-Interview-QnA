/*
  ✅ Function to rotate a matrix 90 degrees clockwise

  Steps:
  1. Transpose the matrix
  2. Reverse each row
*/

function rotateMatrixClockwise(matrix) {
  const n = matrix.length;

  // Step 1: Transpose the matrix (swap rows with columns)
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // Swap matrix[i][j] with matrix[j][i]
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Step 2: Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }

  return matrix;
}

// ✅ Test Case
let input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Rotated Matrix:");
console.log(rotateMatrixClockwise(input));

/*
  ⏱ Time Complexity: O(n^2)
  💾 Space Complexity: O(1) — in-place rotation
*/
