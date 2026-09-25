// Leetcode 46. Permutations
// Given an array nums of distinct integers, return all the possible permutations.
// You can return the answer in any order.
// Permutations are the different arrangements of a set of elements.
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Input: nums = [1]
// Output: [[1]]

var permute = function (nums) {
  let result = [];

  function backtrack(path) {
    if (path.length == nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!path.includes(nums[i])) {
        path.push(nums[i]);
        backtrack(path);
        path.pop();
      }
    }
  }

  backtrack([]);
  return result;
};

// Time Complexity: O(n * n!) - There are n! permutations and generating each permutation takes O(n) time.
// Space Complexity: O(n) - The maximum depth of the recursion tree is n, and we use O(n) space to store the current permutation in the path array.

// Test cases
console.log(permute([1, 2, 3]));
console.log(permute([0, 1]));
console.log(permute([1]));
