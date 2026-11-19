// Leetcode 70. Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Example 3:
// Input: n = 4
// Output: 5
// Explanation: There are five ways to climb to the top.
// 1. 1 step + 1 step + 1 step + 1 step
// 2. 1 step + 1 step + 2 steps
// 3. 1 step + 2 steps + 1 step
// 4. 2 steps + 1 step + 1 step
// 5. 2 steps + 2 steps

let n = 4;
let n1 = 1;
let n2 = 2;
let n3 = 3;
let n4 = 100;

// Approach: Recursion with Memoization
let store = {};
function climbingstairs(n) {
    if (n <= 3) return n;

    if (!store[n]) {
        store[n] = climbingstairs(n - 1) + climbingstairs(n - 2);
    }
    return store[n];
}

// Time Complexity: O(n)
// Space Complexity: O(n) for the recursion stack and memoization storage

// Test cases
console.log(climbingstairs(n));
console.log(climbingstairs(n1));
console.log(climbingstairs(n2));
console.log(climbingstairs(n3));
console.log(climbingstairs(n4));

// Approach: Tabulation (Bottom-Up Dynamic Programming)
function climbingStairsTabulation(n) {
    if (n <= 3) return n;

    let dp = [0, 1, 2, 3]; // Base cases: dp[1] = 1, dp[2] = 2, dp[3] = 3

    for (let i = 4; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

// Time Complexity: O(n)
// Space Complexity: O(n) for the dp array

console.log(climbingStairsTabulation(n));
console.log(climbingStairsTabulation(n1));
console.log(climbingStairsTabulation(n2));
console.log(climbingStairsTabulation(n3));
console.log(climbingStairsTabulation(n4));