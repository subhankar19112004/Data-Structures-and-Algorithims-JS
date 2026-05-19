// HackerRank - CamelCase
// A camel case string is a string that is in the format of a variable name in JavaScript. 
// It starts with a lowercase letter and each subsequent word starts with an uppercase letter.
// Given a camel case string, determine the number of words in the string.
// Example
// s = "saveChangesInTheEditor"
// The string contains five words: save, Changes, In, The, Editor.
// Function Description
// Complete the camelcase function in the editor below. 
// It should return an integer representing the number of words in the input string.
// camelcase has the following parameter(s):
// s: a string in camel case format


const camelcase = (s) => {
    let count = 1;

    for(let i = 1; i < s.length; i++){
        let ch = s[i];
        if(ch >= 'A' && ch <= 'Z'){
            count++;
        }
    }
    return count;
}

// Test cases
console.log(camelcase("saveChangesInTheEditor")); // 5
console.log(camelcase("oneTwoThree")); // 3
console.log(camelcase("thisIsCamelCase")); // 4     
console.log(camelcase("helloWorld")); // 2
console.log(camelcase("javaScriptIsFun")); // 4