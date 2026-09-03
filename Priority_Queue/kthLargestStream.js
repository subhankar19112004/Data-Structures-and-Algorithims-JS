// Leetcode 703. Kth Largest Element in a Stream
// You are part of a university admissions office and need to keep track of the kth highest test score from applicants in real - time.
// This helps to determine cut - off marks for interviews and admissions dynamically as new applicants submit their scores.
// You are tasked to implement a class which, for a given integer k, maintains a stream of test scores and continuously returns the kth highest test score after a new score has been submitted.
// More specifically, we are looking for the kth highest score in the sorted list of all scores.
// Implement the KthLargest class:
// KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of test scores nums.
// int add(int val) Adds a new test score val to the stream and returns the element representing the kth largest element in the pool of test scores so far.
// Example 1:
// Input
// ["KthLargest", "add", "add", "add", "add", "add"]
// [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
// Output
// [null, 4, 5, 5, 8, 8]
// Explanation
// KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// kthLargest.add(3);   // return 4
// kthLargest.add(5);   // return 5
// kthLargest.add(10);  // return 5
// kthLargest.add(9);   // return 8
// kthLargest.add(4);   // return 8

const MinPriorityQueue = require("./minPriorityQueue");

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.heap = new MinPriorityQueue();
  this.k = k;
  for (let i = 0; i < nums.length; i++) {
    this.add(nums[i]);
  }
  return null;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.heap.enqueue(val);
  if (this.heap.size() > this.k) {
    this.heap.dequeue();
  }
  return this.heap.front();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// Time Complexity: O(log k) for each add operation, since we maintain a min-heap of size k. The initial construction of the heap takes O(n log k) time, where n is the number of elements in the input array nums.
// Space Complexity: O(k) for storing the elements in the min-heap, since we only keep track of the k largest elements at any given time.
// Test cases:
const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3));
console.log(kthLargest.add(5));
console.log(kthLargest.add(10));
console.log(kthLargest.add(9));
console.log(kthLargest.add(4));
