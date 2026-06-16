// HackerRank - Gemstones
// There is a collection of rocks. Each rock is composed of various elements, 
// and each element is represented by a lowercase Latin letter from 'a' to 'z'. 
// An element can be present multiple times in a rock, 
// but it is only considered a gemstone if it occurs at least once in each of the rocks in the collection. 
// Given an array of strings where each string represents the composition of a rock, 
// determine how many types of gemstones are in the collection.
// Example
// arr = ['abcdde', 'baccd', 'eeabg']
// The minerals are 'a', 'b', 'c', 'd', 'e', and 'g'. 
// Only 'a', 'b', and 'c' are in each of the rocks, so there are 3 gemstones.


function gemstones(arr) {
    // Write your code here
    let commonMinerals = new Set(arr[0]);
    for(let i = 1; i < arr.length; i++) {
        let current = new Set(arr[i]);
        
        commonMinerals = new Set(
            [...commonMinerals].filter((mineral) => (
                current.has(mineral)
            ))
        );
        
        if(commonMinerals.size == 0) return 0;
    }
    return commonMinerals.size;
}

// Test cases
console.log(gemstones(['abcdde', 'baccd', 'eeabg']));
console.log(gemstones(['abc', 'def', 'ghi']));
console.log(gemstones(['iosrugiodi', 'isdufposdh', 'iawfhssiho']));