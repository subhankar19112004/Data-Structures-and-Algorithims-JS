// Leetcode 198. House Robber
// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed,
// the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and
// it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house,
// return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 2:
// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

// Constraints:
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400

let nums = [2, 7, 9, 3, 1];
let nums1 = [1, 2, 3, 1];
let nums2 = [2, 1, 1, 2];
let nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nums4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Recursive - (Memoization) - Top Down Approach
var robRecursive = function (nums) {
    if (nums.length === 1) return nums[0];
    let store = {};
    let n = nums.length - 1;;

    function solve(i) {
        if (i === 0) return nums[0];
        if (i === 1) return Math.max(nums[0], nums[1]);

        if (store[i] === undefined) {
            store[i] = Math.max(
                solve(i - 2) + nums[i],
                solve(i - 1)
            );
        }
        return store[i];
    }
    return solve(n);
}
// Time Complexity: O(n)
// Space Complexity: O(n) - for recursion stack and memoization store
// Test Cases
console.log(robRecursive(nums));
console.log(robRecursive(nums1));
console.log(robRecursive(nums2));
console.log(robRecursive(nums3));
console.log(robRecursive(nums4));

// Tabulation - Bottom Up Approach (Iterative)
var robTabulation = function (nums) {
    let dp = [nums[0], nums[1] && Math.max(nums[0], nums[1])];
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(
            dp[i - 2] + nums[i],
            dp[i - 1]
        );
    }

    return dp[nums.length - 1];
}
// Time Complexity: O(n)
// Space Complexity: O(n)
// Test Cases
console.log(robTabulation(nums));
console.log(robTabulation(nums1));
console.log(robTabulation(nums2));
console.log(robTabulation(nums3));
console.log(robTabulation(nums4));

// Space Optimization - Bottom Up Approach (Iterative)
var rob = function (nums) {
    let n = nums.length;
    if (n == 1) return nums[0];
    let p1 = Math.max(nums[0], nums[1]);
    let p2 = nums[0];
    let curr;
    for (let i = 2; i < n; i++) {
        curr = Math.max(p2 + nums[i], p1);
        let temp = p1;
        p1 = curr;
        p2 = temp;
    }

    return p1;
};
// Time Complexity: O(n)
// Space Complexity: O(1)
// Test Cases
console.log(rob(nums));
console.log(rob(nums1));
console.log(rob(nums2));
console.log(rob(nums3));
console.log(rob(nums4));
