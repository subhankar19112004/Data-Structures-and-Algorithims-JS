// HackerRank - Append and Delete
// You have two strings of lowercase English letters. You can perform two types of operations on the first string:

// 1. Append a lowercase English letter to the end of the string.
// 2. Delete the last character of the string. Performing this operation on an empty string results in an empty string.
// Given an integer, k, and two strings, s and t, determine whether or not you can convert s to t by performing exactly k of the above operations on s. If it's possible, print Yes. Otherwise, print No.
// Example

// s = "hackerhappy"
// t = "hackerrank"
// k = 9
// We perform the following 9 operations to convert s to t:

const appendDelete = (s, t, k) => {
  let common = 0;
  let i = 0;
  let j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      common++;
      i++;
      j++;
    } else {
      break;
    }
  }

  let toBeDeleted = s.length - common;
  let toBeAdded = t.length - common;
  let totalOps = toBeDeleted + toBeAdded;

  if (k < totalOps) return "No";
  if (k >= s.length + t.length) return "Yes";
  if ((k - totalOps) % 2 === 0) return "Yes";
  return "No";
};

// Test cases
console.log(appendDelete("hackerhappy", "hackerrank", 9)); // Output: "Yes"
console.log(appendDelete("aba", "aba", 7)); // Output: "Yes"
console.log(appendDelete("ashley", "ash", 2)); // Output: "No"
