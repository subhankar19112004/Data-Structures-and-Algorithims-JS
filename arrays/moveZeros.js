// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zeroes.
// Approach-1: We can use two pointers to keep track of the position of the non-zeroes in the array. We can iterate through the array and whenever we encounter a non-zero element, we can swap it with the element at the position of the first pointer and increment both pointers. Finally, we can fill the remaining elements with zeroes.
function moveZeroes(nums){
    let x = 0;
    for( let i = 0; i < nums.length; i++){
        if( nums[i] != 0){
            nums[x] = nums[i];
            x++;
        }
    }
    for( let i = x; i < nums.length; i++){
        nums[i] = 0
    }
}

let arr = [0, 1, 0, 3, 12]
moveZeroes(arr);// Output: [1, 3, 12, 0, 0]
console.log(arr);

//First iteration: x = 0, i = 0, nums[i] = 0, so we skip to the next iteration.
//Second iteration: x = 0, i = 1, nums[i] = 1, so we set nums[0] = 1 and increment x to 1.
//Third iteration: x = 1, i = 2, nums[i] = 0, so we skip to the next iteration.
//Fourth iteration: x = 1, i = 3, nums[i] = 3, so we set nums[1] = 3 and increment x to 2.
//Fifth iteration: x = 2, i = 4, nums[i] = 12, so we set nums[2] = 12 and increment x to 3.