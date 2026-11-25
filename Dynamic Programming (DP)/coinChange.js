// Leetcode 322. Coin Change
// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.

// Example 1:
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:
// Input: coins = [2], amount = 3
// Output: -1
// Explanation: The amount of 3 cannot be made up just with coins of denomination 2.

// Example 3:
// Input: coins = [1], amount = 0
// Output: 0
// Explanation: The amount of 0 can be made up with 0 coins.

// Constraints:
// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104

let coins = [1, 2, 5];
let amount = 11;
let coins1 = [2];
let amount1 = 3;
let coins2 = [1];
let amount2 = 0;
let coins3 = [186, 419, 83, 408];
let amount3 = 6249;
let coins4 = [1, 2, 5];
let amount4 = 100;

// Recursive + Memoization - Top Down Approach
var coinChange = function (coins, amount) {
    let n = coins.length;
    let store = {};

    var fn = (remaining) => {
        if (remaining === 0) return 0;
        if (remaining < 0) return -1;

        if (remaining in store) return store[remaining];

        let minCoins = Infinity;
        for (let i = 0; i < n; i++) {
            let res = fn(remaining - coins[i]);

            if (res !== -1) {
                minCoins = Math.min(minCoins, res + 1);
            }
        }
        store[remaining] = minCoins === Infinity ? -1 : minCoins;
        return store[remaining];
    }

    return fn(amount);
};
// Time Complexity: O(n * amount)
// Space Complexity: O(amount) - for the store object

// Test Cases
console.log(coinChange(coins, amount));
console.log(coinChange(coins1, amount1));
console.log(coinChange(coins2, amount2));
console.log(coinChange(coins3, amount3));
console.log(coinChange(coins4, amount4));