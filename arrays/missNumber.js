// Given an array nums containing n distinct numbers in the range [0, n], 
// return the only number in the range that is missing from the array.
// Approach-1: We can use the formula for the sum of the first n natural numbers to calculate 
// the total sum of the numbers from 0 to n. 
// Then we can iterate through the array and calculate the partial sum of the numbers in the array. 
// Finally, we can subtract the partial sum from the total sum to get the missing number.
function missing (nums){
    let n = nums.length;
    let totalSum = (n * (n+1))/2;
    let partialSum = 0;
    for( let i = 0; i < n; i++){
        partialSum = partialSum + nums[i];
    }
    return totalSum - partialSum;
}

let nums = [ 0,1,2,3,4,5,6,8];
console.log(missing(nums));

// How does the formula for the sum of the first n natural numbers work?
// The formula for the sum of the first n natural numbers is given by:
// S = n(n + 1) / 2
// This formula works because it can be derived from the concept of pairing numbers.
// For example, if we have the numbers from 1 to n, we can pair the first and last numbers, the second and second-to-last numbers, and so on. Each pair sums to n + 1. Since there are n/2 pairs (if n is even) or (n + 1)/2 pairs (if n is odd), the total sum can be calculated as:
// S = (number of pairs) * (sum of each pair)
// If n is even: S = (n/2) * (n + 1) = n(n + 1) / 2
// If n is odd: S = ((n + 1)/2) * (n + 1) = n(n + 1) / 2
// Therefore, the formula S = n(n + 1) / 2 holds true for both even and odd values of n.