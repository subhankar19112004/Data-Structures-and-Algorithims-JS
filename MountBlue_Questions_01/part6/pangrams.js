// HackerRank - Pangrams
// A pangram is a string that contains every letter of the alphabet. 
// Given a sentence determine whether it is a pangram in the English alphabet. 
// Ignore case. Return either pangram or not pangram as appropriate.

const pangrams = (s) => {
    s = s.toLowerCase();

    let container = new Set();

    for(let char of s){
        if(char >= 'a' && char <= 'z') {
            container.add(char);
        }   
    }
    return container.size === 26 ? "pangram" : "not pangram";
}

// Test cases
console.log(pangrams("We promptly judged antique ivory buckles for the next prize")); // pangram
console.log(pangrams("We promptly judged antique ivory buckles for the prize")); // not pangram
console.log(pangrams("The quick brown fox jumps over the lazy dog")); // pangram
console.log(pangrams("The quick brown fox jumps over the lazy do")); // not pangram
console.log(pangrams("Pack my box with five dozen liquor jugs")); // pangram