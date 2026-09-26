// Leetcode 90. Subsets II
// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.
// Example 1:
// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:
// Input: nums = [0]
// Output: [[],[0]]


var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  let result = [];

  function backtrack(path, start) {
    result.push([...path]);

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i - 1] == nums[i]) continue;

      path.push(nums[i]);
      backtrack(path, i + 1);
      path.pop();
    }
  }
  backtrack([], 0);
  return result;
};

// Time Complexity: O(2^n) where n is the number of elements in the input array
// Space Complexity: O(n) for the recursion stack and the result array

// Test cases
const nums1 = [1, 2, 2];
console.log(subsetsWithDup(nums1)); // Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

const nums2 = [0];
console.log(subsetsWithDup(nums2)); // Output: [[],[0]]
