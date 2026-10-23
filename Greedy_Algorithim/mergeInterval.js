// Leetcode Problem: 56. Merge Intervals
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
// and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Time Complexity: O(n log n), where n is the number of intervals in the input array. The sorting step takes O(n log n) time, and the merging step takes O(n) time.
// Space Complexity: O(n), where n is the number of intervals in the input array. In the worst case, we may need to store all the intervals in the output array, resulting in a space complexity of O(n).

var mergeInterval = function (arr) {
  arr.sort((a, b) => a[0] - b[0]);
  let ans = [];
  ans.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] <= ans[ans.length - 1][1]) {
      ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], arr[i][1]);
    } else {
      ans.push(arr[i]);
    }
  }
  return ans;
};

// Test cases
console.log(mergeInterval([[1, 3], [2, 6], [8, 10], [15, 18]]));
console.log(mergeInterval([[1, 4], [4, 5]]));
