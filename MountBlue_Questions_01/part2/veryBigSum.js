// HackerRank - A Very Big Sum....
// Given an array of integers, calculate the sum of its elements. 
// Note: The numbers in the array can be very large, so you should use a 64-bit integer type.


function aVeryBigSum(arr){
    let sum = 0n;

    for(let num of arr){
        sum += BigInt(num);
    }
    return sum;
} 

//Example usage:
console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])); // Output: 5000000015n
console.log(aVeryBigSum([1, 2, 3, 4, 5]));