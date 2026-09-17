// Leetcode 541. Reverse String II(Hashing)
// Given a string s and an integer k,
// you need to reverse the first k characters for every 2k characters counting from the start of the string.
// If there are fewer than k characters left, reverse all of them.
// If there are less than 2k but greater than or equal to k characters,
// then reverse the first k characters and leave the other as original.
// Example 1:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:
// Input: s = "abcd", k = 2
// Output: "bacd"

const reverseStringII = (s, k) => {
  s = s.split("");
  for (let i = 0; i < s.length; i = i + 2 * k) {
    let n = k;
    let mid = Math.floor(n / 2);
    for (let j = 0; j < mid; j++) {
      let temp = s[j + i];
      s[j + i] = s[i + n - j - 1];
      s[i + n - j - 1] = temp;
    }
  }
  return s.join("");
};

// Time Complexity: O(n) - We traverse the string s once to reverse the first k characters for every 2k characters,
// where n is the length of the string s.
// Space Complexity: O(n) - We use an array to store the characters of the string s,
// which takes up O(n) space.

// Test cases
console.log(reverseStringII("abcdefg", 2));
console.log(reverseStringII("abcd", 2));
