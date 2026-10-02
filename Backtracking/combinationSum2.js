// Leetcode 40. Combination Sum II
// Given a collection of candidate numbers (candidates) and a target number (target),
// find all unique combinations in candidates where the candidate numbers sum to target.
// Each number in candidates may only be used once in the combination.
// Note: The solution set must not contain duplicate combinations.
// Example 1:
// Input: candidates = [10,1,2,7,6,1,5], target = 8,
// A solution set is:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]
// Example 2:
// Input: candidates = [2,5,2,1,2], target = 5,
// A solution set is:
// [
//   [1,2,2],
//   [5]
// ]

var combinationSum2 = (arr, target) => {
    arr.sort((a, b) => a - b);
    let result = [];

    function backtrack(remainingTarget, path, start) {
        if (remainingTarget === 0) result.push([...path]);
        if (remainingTarget <= 0) return;

        for (let i = start; i < arr.length && arr[i] <= remainingTarget; i++) { // We are using arr[i] <= remainingTarget bcoz we want to avoid unnecessary iterations when the current candidate exceeds the remaining target.
            if (i > start && arr[i] === arr[i - 1]) continue;
            path.push(arr[i]);
            backtrack(remainingTarget - arr[i], path, i + 1);
            path.pop();
        }
    }

    backtrack(target, [], 0);
    return result;
};

// Time Complexity: O(2^n) where n is the number of candidates.
// In the worst case, we may have to explore all possible combinations of candidates.
// Space Complexity: O(n) for the recursion stack and the path array.

// Test cases
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));