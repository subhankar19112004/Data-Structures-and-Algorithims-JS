// LeetCode: 162. Find Peak Element
// A peak element is an element that is strictly greater than its neighbors.
// Given an integer array nums, find a peak element, and return its index.
// If the array contains multiple peaks, return the index to any of the peaks.
// You may imagine that nums[-1] = nums[n] = -∞.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.


const peakElement = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        let mid = left + Math.floor((right - left) / 2);

        if(arr[mid] < arr[mid + 1]){
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}

//Test Cases
console.log(peakElement([1, 2, 3, 1]));
console.log(peakElement([1, 2, 1, 3, 5, 6, 4]));
console.log(peakElement([10, 9, 8, 7, 6]));