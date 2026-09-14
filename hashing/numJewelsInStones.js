// Leetcode 771. Jewels and Stones (Hashing)
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:
// Input: jewels = "z", stones = "ZZ"
// Output: 0

var numJewelsInStones = function (jewels, stones) {
  let map = {};
  for (let i = 0; i < stones.length; i++) {
    if (!map[stones[i]]) {
      map[stones[i]] = 1;
    } else {
      ++map[stones[i]];
    }
  }

  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    if (map[jewels[i]]) {
      count += map[jewels[i]];
    }
  }
  return count;
};

// We can also solve this problem using a Set to store the jewels and then iterate through the stones to count how many of them are jewels. This approach has a time complexity of O(n + m) and space complexity of O(m), where n is the length of the stones string and m is the length of the jewels string.

// Time Complexity: O(n + m) - We traverse the stones string once to create the map, where n is the length of the stones string. Then we traverse the jewels string once to count the number of jewels in stones, where m is the length of the jewels string.
// Space Complexity: O(n) - We use a map to store the count of each stone, which can take up to n space in the worst case, where n is the length of the stones string.

// Test Cases
console.log(numJewelsInStones("aA", "aAAbbbb")); // 3
console.log(numJewelsInStones("z", "ZZ")); // 0
