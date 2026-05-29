// LeetCode 167. Two Sum II - Input Array Is Sorted
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
// find two numbers such that they add up to a specific target number. 
// Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
// Your solution must use only constant extra space.


const twoSumII = (nums, target) => {
    let i = 0;
    let j = nums.length - 1;

    while (i < j) {
        let sum = nums[i] + nums[j];

        if(sum === target){
            return [i + 1, j + 1];
        } else if (sum < target) {
            i++;
        } else {
            j--;
        }
    }
}

// Time complexity: O(n)
// Space complexity: O(1)

// Test cases
console.log(twoSumII([2, 7, 11, 15], 9));
console.log(twoSumII([2, 3, 4], 6));
console.log(twoSumII([3, 4, 5], 9));
console.log(twoSumII([1, 2, 3, 4, 7], 6));