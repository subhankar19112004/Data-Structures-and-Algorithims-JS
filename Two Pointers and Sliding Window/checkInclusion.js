// Leetcode 567. Permutation in String
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.
// Example 1:
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

const checkInclusion = (s1, s2) => {
  if (s1.length > s2.length) return false;
  let hashS = new Array(26).fill(0);
  let hashW = new Array(26).fill(0);

  let window_length = s1.length;

  for (let i = 0; i < window_length; i++) {
    ++hashS[s1.charCodeAt(i) - 97];
    ++hashW[s2.charCodeAt(i) - 97];
  }

  let j = window_length - 1;
  let i = 0;
  while (j < s2.length) {
    if (isMatch(hashS, hashW)) {
      return true;
    } else {
      --hashW[s2.charCodeAt(i) - 97];
      ++i;
      ++j;
      ++hashW[s2.charCodeAt(j) - 97];
    }
  }
  return false;
};

// helper function to check if the two hash arrays match
var isMatch = function (hashS, hashW) {
  for (let i = 0; i < 26; i++) {
    if (hashS[i] !== hashW[i]) {
      return false;
    }
  }
  return true;
};

// Test cases
console.log(checkInclusion("ab", "eidbaooo")); // true
console.log(checkInclusion("ab", "eidboaoo")); // false
console.log(checkInclusion("adc", "dcda")); // true
console.log(checkInclusion("gef", "abcdefghij")); // true
