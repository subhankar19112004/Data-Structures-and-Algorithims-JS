// Leetcode 347. Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
// You must write an algorithm that runs in O(n log k) time complexity.
// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:
// Input: nums = [1], k = 1
// Output: [1]
// Constraints:
// 1 <= nums.length <= 10^5
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let heap = new MinPriorityQueue((x) => x.value);
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let el = nums[i];
    if (!map[el]) {
      map[el] = 1;
    } else {
      ++map[el];
    }
  }
  for (const [key, value] of Object.entries(map)) {
    heap.enqueue({ key, value });
    if (heap.size() > k) {
      heap.dequeue();
    }
  }
  return heap.toArray().map((x) => Number(x.key));
};

// Time Complexity: O(n log k) for building the frequency map and maintaining the min heap of size k
// Space Complexity: O(n) for storing the frequency map and the min heap

// Test cases
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
console.log(topKFrequent([1, 2, 3, 4, 5], 3));
