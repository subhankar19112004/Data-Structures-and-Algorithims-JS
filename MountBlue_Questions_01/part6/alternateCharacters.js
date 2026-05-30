// HackerRank - Alternate Characters
// You are given a string containing characters A and B only. 
// Your task is to change it into a string such that there are no matching adjacent characters. 
// To do this, you are allowed to delete zero or more characters in the string. 
// Your task is to find the minimum number of required deletions.

const alternateCharacters = (s) => {
    let deletions = 0;

    for(let i = 0; i < s.length - 1; i++) {
        if(s[i] === s[i + 1]) {
            deletions++;
        }
    }
    return deletions;
}

// Test cases
console.log(alternateCharacters("AAAA")); // 3
console.log(alternateCharacters("BBBBB")); // 4
console.log(alternateCharacters("ABABABAB")); // 0
console.log(alternateCharacters("BABABA")); // 0
console.log(alternateCharacters("AAABBB")); // 4