const singleNumber2 = (nums) =>{
    let xor = 0;
    for( let i = 0; i < nums.length; i++){
        xor = xor ^ nums[i];
    }
    return xor;
}

let nums = [4,1,2,1,2];
console.log(singleNumber2(nums))

//How XOR works in this problem?
// XOR is a bitwise operator that returns 1 if the bits are different and 0 if they are the same. 
// In this problem, we can use XOR to find the single number in the array.
// When we XOR all the numbers in the array, the duplicate numbers will cancel each other out because XOR of a number with itself is 0.
// For example, if we have the array [4,1,2,1,2], the XOR operation will be as follows:
// 0 ^ 4 = 4
// 4 ^ 1 = 5
// 5 ^ 2 = 7
// 7 ^ 1 = 6
// 6 ^ 2 = 4
// The final result will be 4, which is the single number in the array.