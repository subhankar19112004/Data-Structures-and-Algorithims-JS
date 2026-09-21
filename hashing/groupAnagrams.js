// Leetcode 49. Group Anagrams (Hashing)
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
// Input: strs = [""]
// Output: [[""]]
// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]
// Constraints:
// 1 <= strs.length <= 10^4
// 0 <= strs[i].length <= 100
// strs[i] consists of lower-case English letters.

// Approach 1: Sort each string and use the sorted string as a key in a hash map. 
// Group the original strings based on the sorted key.
var groupAnagrams = function (strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i].split("").sort().join("");
    if (!map[str]) {
      map[str] = [strs[i]];
    } else {
      map[str].push(strs[i]);
    }
  }
  return [...Object.values(map)];
};

// Time Complexity: O(NKlogK), where N is the length of strs, and K is the maximum length of a string in strs.
// Sorting each string takes O(KlogK) time.
// Space Complexity: O(NK), the total information content stored in ans.

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));