// Leetcode 213. House Robber II
// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed,
// the only constraint stopping you from robbing each of them is that adjacent houses have
// security systems connected and it will automatically contact the police if two adjacent
// houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house,
// return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:
// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2),
// because they are adjacent houses.

// Example 2:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Constraints:
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 1000

let nums = [2, 3, 2];
let nums1 = [1, 2, 3, 1];
let nums2 = [2, 1, 1, 2];
let nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nums4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Tabulation - Bottom Up Approach (Iterative)
var rob = function (nums) {
    let n = nums.length;
    if (n == 1) return nums[0];
    if (n == 2) return Math.max(nums[0], nums[1]);
    function solve(start, end) {
        let p1 = 0;
        let p2 = 0;
        let curr;

        for (let i = start; i <= end; i++) {
            curr = Math.max(p2 + nums[i], p1);

            let temp = p1;
            p1 = curr;
            p2 = temp;
        }

        return p1;
    }
    return Math.max(solve(0, n - 2), solve(1, n - 1));
};

// Time Complexity: O(n)
// Space Complexity: O(1) - for variables p1, p2, curr

// Test Cases
console.log(rob(nums));
console.log(rob(nums1));
console.log(rob(nums2));
console.log(rob(nums3));
console.log(rob(nums4));