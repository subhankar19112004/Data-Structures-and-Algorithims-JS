// Leetcode 77. Combinations
// Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].
// You may return the answer in any order.
// Example 1:
// Input: n = 4, k = 2
// Output: [[2,4],[3,4],[2,3],[1,2],[1,3],[1,4]]
// Example 2:
// Input: n = 1, k = 1
// Output: [[1]]

var combine = (n, k) => {
    let result = [];

    function backtrack(path, start) {

        if (path.length == k) {
            result.push([...path]);
            return;
        }

        for (let i = start; i <= n; i++) {
            path.push(i);
            backtrack(path, i + 1);
            path.pop();
        }
    }

    backtrack([], 1);
    return result;
}

// Time Complexity: O(n choose k) - The number of combinations is C(n, k) = n! / (k! * (n - k)!), and we generate each combination in O(k) time.
// Space Complexity: O(k) - The maximum depth of the recursion tree is k, and we use O(k) space to store the current combination in the path array.

// Test cases
console.log(combine(4, 2));
console.log(combine(1, 1));