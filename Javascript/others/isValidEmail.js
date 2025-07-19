/*
  ✅ Problem: Validate if a given string is a valid email address.

  📌 Requirements:
    - One '@' symbol separating local and domain parts.
    - Valid characters allowed: a-z, A-Z, 0-9, '.', '-', '_', '+'
    - Domain must include at least one '.' and valid TLD (like .com, .org)

  ✅ Time Complexity: O(n) — linear with respect to string length
  ✅ Space Complexity: O(1)
*/

function validateEmail(email) {
  // Optimized regex for standard email format
  const pattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
  return pattern.test(email);
}

// 🔽 Test cases
console.log(validateEmail("user@example.com")); // true
console.log(validateEmail("john.doe@domain.co.uk")); // true
console.log(validateEmail("invalid-email@")); // false
console.log(validateEmail("@domain.com")); // false
console.log(validateEmail("user.name+tag@gmail.com")); // true
