// Leetcode: 34. Find First and Last Position of Element in Sorted Array
// Given an array of integers nums sorted in non-decreasing order, 
// find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

// Approach 1
const searchRange = (arr, target) => {
    if (arr.length == 1 && target == arr[0]) return [0, 0];
    let left = 0;
    let right = arr.length - 1;

    let ans = [-1, -1];

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    arr[left] === target ? ans[0] = left : -1;

    left = 0;
    right = arr.length - 1;

    while (left < right) {
        let mid = left + Math.ceil((right - left) / 2);

        if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid;
        }
    }
    arr[left] === target ? ans[1] = left : -1;

    return ans;
}

// Test cases
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));
console.log(searchRange([1], 1));


console.log("------------------------------------------------------------------------")

// Approach 2
function searchRange2 (arr, target){
    if(arr.length == 1 && arr[0] == target) return [0, 0];
    let left = 0;
    let right = arr.length - 1;
    let ans = [-1, -1];

    while(left <= right){
        let mid = left + Math.floor((right - left) / 2);

        if(arr[mid] === target){
            ans[0] = mid;
            right = mid - 1;
        } else if(arr[mid] < target){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    left = 0;
    right = arr.length - 1;
    while(left <= right){
        let mid = left + Math.floor((right - left) / 2);

        if(arr[mid] == target){
            ans[1] = mid;
            left = mid + 1; 
        } else if(arr[mid] > target){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
}

// Test cases
console.log(searchRange2([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange2([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange2([], 0));
console.log(searchRange2([1], 1));