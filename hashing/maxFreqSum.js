// Leetcode 3541. Maximum Frequency Sum of Vowels and Consonants (Hashing)
// You're given a string s consisting of lowercase English letters.
// You need to find the maximum frequency of any vowel and the maximum frequency of any consonant in the
// string, and return their sum. Vowels are 'a', 'e', 'i', 'o', and 'u'.
// Consonants are all other lowercase English letters.
// Example 1:
// Input: s = "abca"
// Output: 3
// Explanation: The maximum frequency of vowels is 1 (for 'a'), and the maximum frequency of consonants is 2 (for 'b' or 'c'). Their sum is 1 + 2 = 3.
// Example 2:
// Input: s = "abcde"
// Output: 2
// Explanation: The maximum frequency of vowels is 1 (for 'a' or 'e'), and the maximum frequency of consonants is 1 (for 'b', 'c', or 'd'). Their sum is 1 + 1 = 2.

var maxFreqSum = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      ++map[s[i]];
    }
  }
  let mapKeys = Object.keys(map);
  let vowels = ["a", "e", "i", "o", "u"];
  let maxVowel = 0;
  let maxConsonant = 0;
  for (let i = 0; i < mapKeys.length; i++) {
    if (vowels.includes(mapKeys[i])) {
      maxVowel = Math.max(maxVowel, map[mapKeys[i]]);
    } else {
      maxConsonant = Math.max(maxConsonant, map[mapKeys[i]]);
    }
  }
  return maxVowel + maxConsonant;
};

// Time Complexity: O(n) - We traverse the string s once to create the map, where n is the length of the string s. Then we traverse the map keys once to find the maximum frequency of vowels and consonants.
// Space Complexity: O(1) - o(1) bcoz the map can only have a maximum of 26 keys (one for each lowercase English letter), which is a constant space.
console.log(maxFreqSum("abcde")); // 2
console.log(maxFreqSum("aeiou")); // 1
console.log(maxFreqSum("bcdfg")); // 1
