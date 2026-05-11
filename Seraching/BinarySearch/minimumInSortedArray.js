// LeetCode: 153. Find Minimum in Rotated Sorted Array
// Given the sorted rotated array, find the minimum element in it. The array does not contain duplicates.
// Example 1:
// Input: [3,4,5,1,2]
// Output: 1

const minimumInSortedArray = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let mid = left + Math.floor((right - left) / 2);

        if(arr[left] <= arr[right]) return arr[left];

        if(arr[mid] < arr[mid - 1]) return arr[mid];

        if(arr[mid] < arr[left]){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
}

// Test cases
console.log(minimumInSortedArray([3, 4, 5, 1, 2]));
console.log(minimumInSortedArray([4, 5, 6, 7, 0, 1, 2]));
console.log(minimumInSortedArray([11, 13, 15, 17]));