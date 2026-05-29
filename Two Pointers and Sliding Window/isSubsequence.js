// LeetCode Problem: 392. Is Subsequence
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some 
// (can be none) of the characters without disturbing the relative positions of the remaining characters. 
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

const isSubsequence = (s, t) => {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
      j++;
    }
    j++;
  }
  return i === s.length;
};

// Time Complexity: O(n) - We traverse the string t once, where n is the length of t.
// Space Complexity: O(1) - We use a constant amount of space to store the pointers i and j.

// Test cases
console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("ace", "abcde"));
console.log(isSubsequence("aec", "abcde"));
