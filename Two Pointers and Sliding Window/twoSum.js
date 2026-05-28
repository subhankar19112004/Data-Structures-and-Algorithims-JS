// LeetCode 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Approach: Hash Map
const twoSum = (nums, target) => {
    let map = {};
    for(let i = 0; i < nums.length; i++){
        map[nums[i]] = i;
    }
    for(let i = 0; i < nums.length; i++){
        let pairToFind = target - nums[i];
        if(map[pairToFind] && map[pairToFind] !== i){
            return [i, map[pairToFind]];
        }
    }
}

// Time Complexity: O(n) - We traverse the list containing n elements exactly twice. 
// Since the hash table reduces the look up time to O(1), the overall time complexity is O(n).
// Space Complexity: O(n) - The extra space required depends on the number of items stored in the hash table, 
// which stores at most n elements.

// How is it different from the brute force approach?
// The brute force approach would involve checking every pair of numbers to see if they add up to the target, 
// which has a time complexity of O(n^2).
// The hash map approach reduces the time complexity to O(n) by allowing us to check for the complement of each number in constant time.
// The hash map approach is more efficient than the brute force approach because it avoids redundant checks 
// and allows for faster lookups, making it suitable for larger input sizes.
//

// Test cases
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 2, 3], 6));