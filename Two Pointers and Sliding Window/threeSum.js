// Leetcode: 15. 3Sum
// Given an integer array nums, 
// return all the triplets [nums[i], nums[j], nums[k]] 
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.
// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.



const threeSum = (arr) => {
    arr.sort((a, b) => a - b);
    let ans = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] != arr[i - 1]){
            twoSum(arr, i, ans);
        }
    }
    return ans;
}

var twoSum = function(arr, x, ans) {
    let i = x + 1;
    let j = arr.length - 1;

    while(i < j){
        let sum = arr[i] + arr[j] + arr[x];
        if(sum === 0){
            ans.push([arr[x], arr[i], arr[j]]);
            i++;
            j--;
            while(i < j && arr[i] === arr[i - 1]){
                i++;
            }
        } else if(sum > 0){
            j--;
        } else {
            i++;
        }
    }
};

// Test Cases
console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([0,1,1]));
console.log(threeSum([0,0,0]));
console.log(threeSum([-2,0,0,2,2]));
console.log(threeSum([-2,0,1,1,2]));