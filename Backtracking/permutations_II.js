// Leetcode 47. Permutations II
// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
// Example 1:
// Input: nums = [1,1,2]
// Output:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]
// Example 2:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]


var permutationsUnique = function (nums) {
    nums.sort((a, b) => a - b);
    let result = [];

    function backtrack(path, choices) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < choices.length; i++) {
            if (i > 0 && choices[i] === choices[i - 1]) {
                continue;
            }
            path.push(choices[i]);
            backtrack(path, choices.slice(0, i).concat(choices.slice(i + 1)));
            path.pop();
        }
    }

    backtrack([], nums);
    return result;
}

// Time Complexity: O(n * n!) where n is the length of the input array.
//  - We generate all permutations, and for each permutation, we perform a copy operation which takes O(n) time.
// Space Complexity: O(n) for the recursion stack and the path array, where n is the length of the input array.

// Test cases
console.log(permutationsUnique([1, 1, 2]));
console.log(permutationsUnique([1, 2, 3]));