// HackerRank - Two Strings
// Given two strings, determine if they share a common substring. 
// A substring may be as small as one character.
// Example
// s1 = 'hello'
// s2 = 'world'
// These share the common substring 'o', so the answer is YES.


const twoStrings = (s1, s2) => {
    let s1Set = new Set(s1);
    for(let char of s2) {
        if(s1Set.has(char)) return 'YES';
    }
    return 'NO';
}

// Test cases
console.log(twoStrings('hello', 'world'));
console.log(twoStrings('hi', 'world'));
console.log(twoStrings('abc', 'def'));
console.log(twoStrings('a', 'bcdef'));