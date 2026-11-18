// Leetcode 509. Fibonacci Number (Using Dynamic Programming)
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
// such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:
// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

let n1 = 2;
let n2 = 3;
let n3 = 100;


// Top-Down Approach (Memoization)(Recursive)
let store = {};
var fib = function (n) {
    if (n <= 1) return n;

    if (!store[n]) {
        store[n] = fib(n - 1) + fib(n - 2);
    }

    return store[n];
};

console.log(fib(n1)); // Output: 1
console.log(fib(n2)); // Output: 2
console.log(fib(n3)); // Output: 354224848179261915075

// Time Complexity: O(n)
// Space Complexity: O(n)

// Bottom-Up Approach (Tabulation)(Iterative)
function fibo(n) {
    let dp = [0, 1];

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

console.log(fibo(n1)); // Output: 1
console.log(fibo(n2)); // Output: 2
console.log(fibo(n3)); // Output: 354224848179261915075

// Time Complexity: O(n)
// Space Complexity: O(n)