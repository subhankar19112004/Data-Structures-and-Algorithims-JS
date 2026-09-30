// Leetcode 39. Combination Sum
// Given an array of distinct integers candidates and a target integer target,
// return a list of all unique combinations of candidates where the chosen numbers sum to target.
// You may return the combinations in any order.
// The same number may be chosen from candidates an unlimited number of times.
// Two combinations are unique if the frequency of at least one of the chosen numbers is different.
// Example 1:
// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Example 2:
// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]
// Example 3:
// Input: candidates = [2], target = 1
// Output: []


var combinationSum = (arr, target) => {
    let result = [];

    function bactrack(remainingTarget, path, start) {
        if (remainingTarget === 0) result.push([...path]);
        if (remainingTarget <= 0) return;

        for (let i = start; i < arr.length; i++) {
            path.push(arr[i]);
            bactrack(remainingTarget - arr[i], path, i);
            path.pop();
        }
    }
    bactrack(target, [], 0);
    return result;
}

// Time Complexity: O(n^(t/m + 1)), where n is the number of candidates, t is the target value, 
// and m is the minimal value among the candidates. The height of the recursion tree can go up to t/m, 
// and at each level, we can have n branches.
// Space Complexity: O(t/m), where t is the target value and m is the minimal value among the candidates. 
// The space complexity is determined by the maximum depth of the recursion tree, which can go up to t/m.

// Test cases
console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
console.log(combinationSum([2], 1));