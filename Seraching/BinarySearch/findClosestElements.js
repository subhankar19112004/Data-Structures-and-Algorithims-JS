// LeetCode: 658. Find K Closest Elements
// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. 
// The result should also be sorted in ascending order.
// An integer a is closer to x than an integer b if:
// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b

const findClosestElements = (arr, k, x) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right){
        let mid = left + Math.floor((right - left) / 2);

        if(arr[mid + k] - x < x - arr[mid]){
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return arr.slice(left, left + k);
}

// Test cases
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3)); // [ 1, 2, 3, 4 ]
console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1)); // [ 1, 2, 3, 4 ]
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 6)); // [ 2, 3, 4, 5 ]