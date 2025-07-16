/*
  ✅ Problem Statement:
  Given a date (day, month, year), determine the day of the week on which that date falls.
  Return values from 0 to 6 where:
    0 = Sunday, 1 = Monday, ..., 6 = Saturday.

  🔸 Valid for any date in the past or future.

  🔸 Approach:
    Use Zeller's Congruence, an algorithm to calculate the day of the week for any Gregorian calendar date.

  🔸 Time Complexity: O(1) – Constant time arithmetic operations
  🔸 Space Complexity: O(1)
*/

function getDayOfWeek(day, month, year) {
  // Adjust months so that March = 3, ..., January = 13, February = 14 (previous year)
  if (month < 3) {
    month += 12;
    year -= 1;
  }

  let K = year % 100; // Year of the century
  let J = Math.floor(year / 100); // Zero-based century

  // Zeller's Congruence formula
  let h =
    (day +
      Math.floor((13 * (month + 1)) / 5) +
      K +
      Math.floor(K / 4) +
      Math.floor(J / 4) +
      5 * J) %
    7;

  // Zeller's returns: 0=Saturday, 1=Sunday, ..., 6=Friday
  // Adjust to: 0=Sunday, 1=Monday, ..., 6=Saturday
  const dayOfWeek = (h + 6) % 7;

  return dayOfWeek;
}

/* 🔽 Test Cases */
console.log(getDayOfWeek(2, 7, 2025)); // Output: 3 (Wednesday)
console.log(getDayOfWeek(1, 1, 2000)); // Output: 6 (Saturday)
console.log(getDayOfWeek(4, 7, 1776)); // Output: 4 (Thursday)
