// Hackerrank Problem: XOR Strings
// Given two binary strings s and t of equal length, the task is to find the XOR of the two strings. 
// The XOR operation is defined as follows: for each bit position, if the bits are the same, the result is 0; if they are different, the result is 1.
// The function takes two binary strings s and t as input and returns a new binary string that represents the XOR of s and t.

function isXORStrings(s, t) {
  var res = "";
  for (var i = 0; i < s.length; i++) {
    if (s[i] === t[i]) {
      // Fix 1: Correct comparison
      res += "0"; // Fix 2: Append '0'
    } else {
      res += "1"; // Fix 3: Append '1'
    }
  }
  return res;
}

// Test cases
console.log(isXORStrings("1101", "1011"));
console.log(isXORStrings("1111", "0000"));
