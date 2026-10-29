// Leetcode 435. Non-overlapping Intervals
// Given an array of intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
// Example 1:
// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
 
// Example 2:
// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

// Example 3:
// Input: intervals = [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

const eraseOverlapIntervals = (arr) => {
    arr.sort((a, b) => a[1] - b[1]);
    let removeCount = 0;
    let k = -Infinity; // Initialize k to negative infinity to ensure the first interval is always considered.

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] < k) ++removeCount; // If the current interval starts before k, it overlaps with the previous interval, so we increment the remove count.
        else k = arr[i][1];
    }
    return removeCount;
}

// Time Complexity: O(n log n), where n is the number of intervals. The sorting step takes O(n log n) time, and the subsequent iteration through the intervals takes O(n) time.
// Space Complexity: O(1), as we are using a constant amount of extra space for variables like removeCount and k, regardless of the input size.

// Test cases
console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]));
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]]));
console.log(eraseOverlapIntervals([[1,2],[2,3]]));