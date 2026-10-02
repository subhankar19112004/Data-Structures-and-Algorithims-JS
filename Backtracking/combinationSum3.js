// Leetcode 216. Combination Sum III
// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.
// Example 1:
// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Example 2:
// Input: k = 3, n = 9
// Output: [[1,2,6],[1,3,5],[2,3,4]]

var combinationSum3 = (n, k) => {
    let result = [];

    function backtrack(remainingSum, path, start) {
        if (path.length == k && remainingSum == 0) {
            result.push([...path]);
        }
        if (path.length == k || remainingSum <= 0) return;

        for (let i = start; i <= n && i <= remainingSum; i++) {
            path.push(i);
            backtrack(remainingSum - i, path, i + 1);
            path.pop();
        }
    }

    backtrack(n, [], 1);
    return result;
};

// Time Complexity: O((k! * 9!) / (k! * (9-k)!)) where k is the number of elements in the combination and 9 is the total number of candidates (1-9).
// In the worst case, we may have to explore all possible combinations of candidates.
// Space Complexity: O(k) for the recursion stack and the path array.

// Test cases
console.log(combinationSum3(7, 3));
console.log(combinationSum3(9, 3));