// Hackerrank : Anagram
// Two words are anagrams of each other if the first word's letters can be rearranged to form the second word.
// In other words, both words must contain the same exact letters in the same exact frequency (case-sensitive).
// For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.
// Given a string s, find the minimum number of characters to change to make the two halves of the string anagrams of each other.
// If the string cannot be split into two equal halves, return -1.
// Example
// s = "aaabbb"
// The first half is "aaa" and the second half is "bbb". You can change any of the three letters from "aaa" to "b" to make "bbb". The minimum number of changes is 3.
// s = "ab"
// The first half is "a" and the second half is "b". You can change "a" to "b" in 1 change.
// s = "abc"
// The string cannot be split into two equal halves, so return -1.

var anagram = function (s) {
  if (s.length % 2 !== 0) return -1;

  let map = {};
  let mid = s.length / 2;

  for (let i = 0; i < mid; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      ++map[s[i]];
    }
  }

  for (let i = mid; i < s.length; i++) {
    if (map[s[i]]) {
      --map[s[i]];
    }
  }

  let required = 0;
  for (const count of Object.values(map)) {
    required += count;
  }
  return required;
};

// Time Complexity: O(n) where n is the length of the string s
// Space Complexity: O(n) where n is the number of unique characters in the first half of the string s

// Example usage:
console.log(anagram("aaabbb"));
console.log(anagram("ab"));
console.log(anagram("abc"));
