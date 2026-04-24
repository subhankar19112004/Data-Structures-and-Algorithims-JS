// leetcode 496. Next Greater Element I
// The next greater element of some element x in an array is the first greater element that is to
//  the right of x in the same array. You are given two distinct 0-indexed integer arrays nums1 and
//  nums2, where nums1 is a subset of nums2.
// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine
//  the next greater element of nums2[j] in nums2. If there is no next greater element, then the
//  answer for this query is -1. Return an array ans of length nums1.length such that ans[i] is
//  the next greater element as described above.

/**
 * @param {number[]} nums1
 * @param {number[]} arr
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, arr) {
    let ngeMap = {};
    let stack = [];
    let n = arr.length;
    stack.push(arr[n - 1]);
    ngeMap[arr[n - 1]] = -1;

    for (let i = n - 2; i >= 0; i--) {
        let top = stack[stack.length - 1];
        if (arr[i] < top) {
            ngeMap[arr[i]] = top;
        } else {
            while (stack.length) {
                if (arr[i] > stack[stack.length - 1]) {
                    stack.pop();
                } else {
                    ngeMap[arr[i]] = stack[stack.length - 1];
                    break;
                }
            }
            if(!stack.length){
                ngeMap[arr[i]] = -1;
            }
        }
        stack.push(arr[i]);
    }

    let ans = [];
    for(let i = 0; i < nums1.length; i++){
        ans.push(ngeMap[nums1[i]]);
    }

    return ans;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));