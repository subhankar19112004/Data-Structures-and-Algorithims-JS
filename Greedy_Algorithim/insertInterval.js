// Leetcode 57. Insert Interval
// You are given an array of non-overlapping intervals {intervals},
// where intervals[i] = [starti, endi] represent the start and the end of the ith interval and
// intervals is sorted in ascending order by starti. You are also given an
// interval newInterval = [start, end] that represents the start and end of another interval.
// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti
// and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
// Return intervals after the insertion.

// Example 1:
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

// Example 2:
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
// Graphical representation of the above example:
// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
// |---|   |---|   |---|   |---|   |---|   |---|   |---|   |---|   |---|   |---|   |---|   |---|   |---|   |---|   |---|   |---|
// [1,3]   [4,8]   [6,9]   [10,12] [13,16]
// The merged intervals are [1,5] and [6,9].

// Example 3:
// Input: intervals = [], newInterval = [5,7]
// Output: [[5,7]]

const insertInterval = (arr, x) => {
  let ans = [];
  let n = arr.length;

  let i = 0;
  while (i < n && arr[i][1] < x[0]) {
    ans.push(arr[i]);
    ++i;
  }

  while (i < n && arr[i][0] <= x[1]) {
    x[0] = Math.min(x[0], arr[i][0]);
    x[1] = Math.max(x[1], arr[i][1]);
    ++i;
  }
  ans.push(x);

  while (i < n) {
    ans.push(arr[i]);
    ++i;
  }
  return ans;
};

// Time Complexity: O(n), where n is the number of intervals in the input array. We iterate through the intervals once, performing constant-time operations for each interval.
// Space Complexity: O(n), where n is the number of intervals in the input array. In the worst case, we may need to store all the intervals in the output array, resulting in a space complexity of O(n).

// Test cases
console.log(insertInterval([[1, 3], [6, 9]], [2, 5]));
console.log(insertInterval([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]));
console.log(insertInterval([], [5, 7]));
