// Leetcode 2942: Find words containing character(Hashing)
// You are given a 0-indexed array of strings words and a character x.
// Return an array of all the indices i such that x is present in words[i].
// Return the indices in increasing order.
// Example 1:
// Input: words = ["this","is","a","test"], x = "t"
// Output: [0,3]
// Explanation: The character 't' is present in words[0] and words[3].
// Example 2:
// Input: words = ["hello","world"], x = "o"
// Output: [0,1]
// Explanation: The character 'o' is present in words[0] and words[1].

var findWordsContaining = function (words, x) {
  let ans = [];
  for (let i = 0; i < words.length; i++) {
    let curr = words[i];
    if (curr.includes(x)) {
      ans.push(i);
    }
  }
  return ans;
};

// Time Complexity: O(n * m) - We traverse the array of words once, where n is the number of words and m is the average length of the words.
// Space Complexity: O(k) - We use an array to store the indices of the words that contain the character x, which can take up to k space in the worst case, where k is the number of words that contain x.
// Test Cases
console.log(findWordsContaining(["this", "is", "a", "test"], "t")); // [0, 3]
console.log(findWordsContaining(["hello", "world"], "o")); // [0, 1]
