// Leetcode Problem: 239. Sliding Window Maximum
// You are given an array of integers nums, 
// there is a sliding window of size k which is moving from the very left of the array to the very right. 
// You can only see the k numbers in the window. Each time the sliding window moves right by one position.
// Return the max sliding window.
// Example 1:
// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]

const maxSlidingWindow = (arr, k) => {
    let queue = [];
    let ans = [];

    let i = 0;
    let j = 0;

    while (j < arr.length) {

        // We are popping out all elements which are smaller than the arr[j] as they not need to be checked for max in the window as 
        // arr[j] is greater than them and they will be removed from the window before arr[j] is removed.
        while (queue.length && arr[j] > queue[queue.length - 1]) queue.pop();
        // Then we push the arr[j] in the queue as it can be the max of the window.
        // as all smaller elements are removed from the queue.
        queue.push(arr[j]);

        // When we have traversed the first k elements, we start to check for the max of the window.
        if (j >= k - 1) {
            // The first element of the queue is the max of the window as all smaller elements are removed from the queue.
            ans.push(queue[0]);

            // We are doing this check because the first element of the queue is the max of the window and if it is equal to the arr[i] then we remove it from the queue as it is no longer in the window.
            arr[i] === queue[0] && queue.shift();
            // We are moving the window forward by incrementing i.
            ++i;
        }
        // We are moving the window forward by incrementing j.
        ++j;
    }
    return ans;
}

// Test Case
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // Output: [3,3,5,5,6,7]
