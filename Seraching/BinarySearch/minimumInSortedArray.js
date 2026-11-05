// LeetCode: 153. Find Minimum in Rotated Sorted Array
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, 
// the array nums = [0,1,2,4,5,6,7] might become:
// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
// Given the sorted rotated array nums of unique elements, return the minimum element of this array.
// You must write an algorithm that runs in O(log n) time.
// Example 1:
// Input: [3,4,5,1,2]
// Output: 1

const minimumInSortedArray = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        if (nums[left] <= nums[right]) return nums[left];
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] < nums[mid - 1]) return nums[mid];
        if (nums[left] > nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return nums[right];
}

// Time Complexity: O(log n)
// Space Complexity: O(1)

// Test cases
console.log(minimumInSortedArray([3, 4, 5, 1, 2])); // Output: 1
console.log(minimumInSortedArray([4, 5, 6, 7, 0, 1, 2])); // Output: 0
console.log(minimumInSortedArray([11, 13, 15, 17])); // Output: 11