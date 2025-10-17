/*
  🧠 Problem Statement:
  ---------------------
  Implement a simple CSV parser in JavaScript.
  The function should take a CSV string (comma-separated values)
  and return a 2D array where each subarray represents a row.

  Example:
    Input:
      "name,age,city\nAlice,25,London\nBob,30,Paris"
    
    Output:
      [
        ["name", "age", "city"],
        ["Alice", "25", "London"],
        ["Bob", "30", "Paris"]
      ]

  💡 Notes:
  - Assume commas separate fields and newlines separate rows.
  - Trim spaces around cells.
  - You can handle quoted values if required (e.g., "John, Doe" inside quotes).

  ⚙️ Time Complexity:  O(n)   → Each character in the CSV string is visited once.
  💾 Space Complexity: O(n)   → Output 2D array stores all parsed values.
*/

function parseCSV(csvString) {
  const rows = csvString.split("\n"); // Split by newline to get each row
  const result = [];

  for (let row of rows) {
    // Split by comma and trim spaces
    const columns = row.split(",").map((col) => col.trim());
    result.push(columns);
  }

  return result;
}

// 🧪 Example usage:
const csvData = "name,age,city\nAlice,25,London\nBob,30,Paris";
console.log(parseCSV(csvData));

/*
  ✅ Output:
  [
    [ 'name', 'age', 'city' ],
    [ 'Alice', '25', 'London' ],
    [ 'Bob', '30', 'Paris' ]
  ]
*/
