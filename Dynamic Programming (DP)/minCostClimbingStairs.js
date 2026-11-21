// Leetcode 746. Min Cost Climbing Stairs
// You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
// Once you pay the cost, you can either climb one or two steps. You can either start from the step with index 0, or the step with index 1.
// Return the minimum cost to reach the top of the floor.

// Example 1:
// Input: cost = [10,15,20]
// Output: 15
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.

// Example 2:
// Input: cost = [1,100,1,1,1,100,1,1,100,1]
// Output: 6
// Explanation: You will start at index 0.
// - Pay 1 and climb two steps to reach index 2.
// - Pay 1 and climb two steps to reach index 4.
// - Pay 1 and climb two steps to reach index 6.
// - Pay 1 and climb one step to reach index 7.
// - Pay 1 and climb two steps to reach index 9.
// - Pay 1 and climb one step to reach the top.
// The total cost is 6.

let cost = [10, 15, 20];
let cost1 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
let cost2 = [0, 0, 0, 0];
let cost3 = [1, 2, 3];
let cost4 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1, 0];

// Approach: Tabulation (Bottom-Up Dynamic Programming) (Iterative)
var minCostClimbingStairs = function (cost) {
    let n = cost.length;
    let dp = [0, 0];

    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(
            dp[i - 1] + cost[i - 1],
            dp[i - 2] + cost[i - 2]
        );
    }
    return dp[n];
};

// Time Complexity: O(n)
// Space Complexity: O(n) for the dp array

// Test cases
console.log(minCostClimbingStairs(cost));
console.log(minCostClimbingStairs(cost1));
console.log(minCostClimbingStairs(cost2));
console.log(minCostClimbingStairs(cost3));
console.log(minCostClimbingStairs(cost4));

// Approach: Recursion with Memoization
/**
 * @param {number[]} cost
 * @return {number}
 */


var minCostClimbingStairsRecurssive = function (cost) {
    let store = {};
    let n = cost.length;

    function solve(i) {
        if (i <= 1) return 0;

        if (store[i] === undefined) {
            store[i] = Math.min(
                solve(i - 1) + cost[i - 1],
                solve(i - 2) + cost[i - 2]
            );
        }

        return store[i];
    }

    return solve(n);
};

// Time Complexity: O(n)
// Space Complexity: O(n) for the recursion stack and memoization storage

// Test cases
console.log(minCostClimbingStairsRecurssive(cost));
console.log(minCostClimbingStairsRecurssive(cost1));
console.log(minCostClimbingStairsRecurssive(cost2));
console.log(minCostClimbingStairsRecurssive(cost3));
console.log(minCostClimbingStairsRecurssive(cost4));
