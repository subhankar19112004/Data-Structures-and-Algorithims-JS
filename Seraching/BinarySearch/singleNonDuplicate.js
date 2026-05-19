// LeetCode: 540. Single Element in a Sorted Array
// You are given a sorted array consisting of only integers where every element appears exactly twice, 
// except for one element which appears exactly once.
// Return the single element that appears only once.
// Your solution must run in O(log n) time and O(1) space.
// Example 1:
// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2


const singleNonDuplicate = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let mid = left + Math.floor((right - left) / 2);

        if(arr[mid] !== arr[mid + 1] && arr[mid] !== arr[mid - 1])return arr[mid];

        if(arr[mid] == arr[mid - 1]){
            let leftCount = (mid - 1) - left;
            if(leftCount % 2 === 1){
                right = mid - 2;
            } else {
                left = mid + 1;
            }
        } else if(arr[mid] == arr[mid + 1]){
            let rightCount = right - (mid + 1);
            if(rightCount % 2 === 1){
                left = mid + 2;
            } else {
                right = mid - 1;
            }
        }
    }
    return arr[right];
}

// Test Cases
console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8])) // 2
console.log(singleNonDuplicate([3,3,7,7,10,11,11])) // 10
console.log(singleNonDuplicate([1,1,2])) // 2
console.log(singleNonDuplicate([1,2,2])) // 1
console.log(singleNonDuplicate([1,1,2,2,3])) // 3