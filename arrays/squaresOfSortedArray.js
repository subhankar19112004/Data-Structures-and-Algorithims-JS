// 977. Squares of a Sorted Array
// Given an integer array nums sorted in non-decreasing order, 
// return an array of the squares of each number sorted in non-decreasing order.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const squaresOfSortedArray = (arr) => {
    let n = arr.length;
    let ans = new Array(n).fill(0);

    let left = 0;
    let right = n -1;
    let index = n - 1;

    while(left <= right){
        let leftSq = arr[left] * arr[left];
        let rightSq = arr[right] * arr[right];

        if(leftSq > rightSq){
            ans[index] = leftSq;
            left++;
        } else {
            ans[index] = rightSq;
            right--;
        }
        index--;
    }
    return ans;
}

console.log(squaresOfSortedArray([-4,-1,0,3,10])); // [0,1,9,16,100]
console.log(squaresOfSortedArray([-7,-3,2,3,11])); // [4,9,9,49,121]
console.log(squaresOfSortedArray([-5,-3,-2,-1])); // [1,4,9,25]