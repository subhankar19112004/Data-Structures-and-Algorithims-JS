// 503 : Next Greater Element II
// Given a circular array, print the Next Greater Number for every element. 
// The Next Greater Number of a number x is the first greater number to its traversing-order 
// next in the array, which means you could search circularly to find its next greater number.
// If it doesn't exist, output -1 for this number.
// Approach 1 : By doubling the array and using stack to find the next greater element for 
// each element in the original array.
const removeGreaterEl2 = (nums) => {
    let arr = [...nums, ...nums];
    let n = arr.length;

    let stack = [];
    let ans = new Array(n).fill(-1);
    stack.push(arr[n - 1]);

    for(let i = n - 2; i >= 0; i--){
        while(stack.length){
            let top = stack[stack.length - 1];
            if(arr[i] > top){
                stack.pop();
            } else {
                ans[i] = top;
                break;
            }
        }
        stack.push(arr[i]);
    }
    return ans.slice(0, n/2);
}

// Aproach 2 : by using the stack and iterating the array twice but not creating another instead by incresing the i value
//  to find the next greater element for each element in the original array.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(arr) {

    let n = arr.length;
    let ans = new Array(n).fill(-1);
    let stack = [];
    stack.push(arr[n - 1]);

    for(let i = (2 * n) - 2; i >= 0; i--){
        while(stack.length){
            let top = stack[stack.length - 1];
            if(arr[i % n] < top){
                ans[i % n] = top;
                break;
            } else {
                stack.pop();
            }
        }
        stack.push(arr[i % n])
    }
    return ans.slice(0, n);
};

console.log(removeGreaterEl2([4, 1, 2]));
console.log(removeGreaterEl2([2, 4]));
console.log(removeGreaterEl2([1, 3, 5, 2, 4]));