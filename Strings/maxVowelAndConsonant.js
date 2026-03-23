/**
 * @param {string} s
 * @return {number}
 */
// 3541. Maximum Frequency Sum of Vowels and Consonants
// You are given a string s consisting of lowercase English letters. The frequency of a character in s is the number of times it appears in s. The frequency sum of a vowel is the maximum frequency of any vowel in s, and the frequency sum of a consonant is the maximum frequency of any consonant in s. Return the sum of the frequency sum of vowels and the frequency sum of consonants.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and the consonants are all other lowercase English letters.
// Approach-1: We can use a hash map to store the frequency of each character in the string. Then, we can iterate through the string again and check if each character is a vowel or a consonant. If it is a vowel, we can update the maximum frequency of vowels. If it is a consonant, we can update the maximum frequency of consonants. Finally, we can return the sum of the maximum frequency of vowels and the maximum frequency of consonants.
var maxFreqSum = function(s) {

    // Create a hash map to store the frequency of each character in the string
    let map = {};
    for(let i = 0; i < s.length; i++){
        if(!map[s[i]]){
            map[s[i]] = 1;
        } else {
            ++map[s[i]]
        }
    }

    console.log(map);

    // Create a set of vowels to check if a character is a vowel or a consonant

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let maxVowel = 0;
    let maxConsonant = 0;
    // Iterate through the string again and check if each character is a vowel or a consonant. If it is a vowel, update the maximum frequency of vowels. If it is a consonant, update the maximum frequency of consonants.

    for(let i = 0; i < s.length; i++){
        // Check if the character is a vowel or a consonant
        if(vowels.includes(s[i])){
            maxVowel = Math.max(maxVowel, map[s[i]]);
        } else {
            maxConsonant = Math.max(maxConsonant, map[s[i]])
        }
    }
    return maxVowel + maxConsonant;
};

// Approach-2: We can iterate through the map in second loop and check if the character is a vowel or a consonant. If it is a vowel, we can update the maximum frequency of vowels. If it is a consonant, we can update the maximum frequency of consonants. Finally, we can return the sum of the maximum frequency of vowels and the maximum frequency of consonants. by finding the map key with the maximum value for vowels and consonants separately.
/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum1 = function(s) {
    let map = {};
    for(let i = 0; i < s.length; i++){
        // if(!map[s[i]]){
        //     map[s[i]] = 1;
        // } else {
        //     ++map[s[i]]
        // }
        map[s[i]] = !map[s[i]] ? 1 : ++map[s[i]];
    }

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let maxVowel = 0;
    let maxConsonant = 0;
    let mapKeys = Object.keys(map);

    for(let i = 0; i < mapKeys.length; i++){
        if(vowels.includes(mapKeys[i])){
            maxVowel = Math.max(maxVowel, map[mapKeys[i]]);
        } else {
            maxConsonant = Math.max(maxConsonant, map[mapKeys[i]])
        }
    }
    return maxVowel + maxConsonant;
};

let s = "abciiidef";
console.log(maxFreqSum(s));
console.log(maxFreqSum1(s));