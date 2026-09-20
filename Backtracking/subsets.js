// Leetcode 78. Subsets
// Given an integer array nums of unique elements,
// return all possible subsets (the power set).
// The solution set must not contain duplicate subsets.
// Return the solution in any order.

// Subset: A subset of an array is a selection of elements from the array,
// where the order of elements does not matter.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

var subsets = function (arr) {
  let result = [];

  function backtrack(path, start) {
    result.push([...path]);

    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      backtrack(path, i + 1);
      path.pop();
    }
  }
  backtrack([], 0);
  return result;
};

// Time Complexity: O(2^n) where n is the length of the input array. This is because for each element, we have two choices: either include it in the subset or not. Therefore, the total number of subsets is 2^n.
// Space Complexity: O(n) for the recursion stack and the space used to store the subsets in the result array. The maximum depth of the recursion tree is n, and we also store all subsets in the result array, which can take up to O(2^n) space in the worst case.

// Test cases
console.log(subsets([1, 2, 3]));
console.log(subsets([0]));
