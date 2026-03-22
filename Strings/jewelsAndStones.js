/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
// 771. Jewels and Stones
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// The letters in jewels are guaranteed distinct, and all characters in jewels and stones are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".
// Approach-1: We can use a Set to store the characters in jewels and then iterate through the characters in stones. If a character in stones is also in the Set, we can increment a count variable.
var numJewelsInStones = function(jewels, stones) {
    let jSet = new Set();
    let count = 0;
    for(let i = 0; i < jewels.length; i++){
       jSet.add(jewels[i])
    }
    for(let j = 0; j < stones.length; j++){
        if(jSet.has(stones[j])){
            ++count;
        }
    }
    return count;
};

// Approach-2: We can also use the .includes() method to check if each character in stones is also in jewels. If it is, we can increment a count variable.
var numJewelsInStones2 = function(jewels, stones) {
    let count = 0;
    for(let i = 0; i < stones.length; i++){
        if(jewels.includes(stones[i])){
            ++count;
        }
    }
    return count;
};

// Approach-3: We can also use two nested loops to check if each character in stones is also in jewels. If it is, we can increment a count variable.
var numJewelsInStones3 = function(jewels, stones) {
    let count = 0;
    for(let i = 0; i < stones.length; i++){
        for(let j = 0; j < jewels.length; j++){
            if(stones[i] == jewels[j]){
                ++count;
                break;
            }
        }
    }
    return count;
};