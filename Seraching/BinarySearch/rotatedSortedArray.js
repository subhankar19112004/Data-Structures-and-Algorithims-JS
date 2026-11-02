// Leetcode 33. Search in Rotated Sorted Array
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
// For example, the array nums = [0,1,2,4,5,6,7] might become:
// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results 
// in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
// Given the sorted rotated array nums of unique elements and an integer target, 
// return the index of target if it is in nums, or -1 if it is not in nums.

const rotatedSortedArray = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) return mid;

        if (arr[left] <= arr[mid]) {
            if (target >= arr[left] && target < arr[mid]) {
                // If target is at the left boundary
                if (target == arr[left]) return left;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (target > arr[mid] && target <= arr[right]) {
                // If target is at the right boundary
                if (target == arr[right]) return right;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}

// Time Complexity: O(log n), where n is the number of elements in the array. We are using binary search to narrow down the possible indices.
// Space Complexity: O(1), as we are using a constant amount of extra space regardless of the input size.

// Example usage:
const arr = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
console.log(rotatedSortedArray(arr, target)); // Output: 4
