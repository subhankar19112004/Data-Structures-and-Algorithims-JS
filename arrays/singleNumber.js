// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
function singleNumber(nums){
    let hash = {};
    for( let i = 0; i < nums.length; i++){
        if(!hash[nums[i]]){
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        }
    }
    for(let i = 0; i < nums.length; i++){
        if(hash[nums[i]] == 1){
            return nums[i];
            
        }
    }

}

let nums = [4,1,2,1,2];
console.log(singleNumber(nums))
