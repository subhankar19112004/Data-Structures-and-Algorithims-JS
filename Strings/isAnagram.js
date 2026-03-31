// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once

// Approach: Sort the characters of both strings and compare them. If they are the same, then t is an anagram of s.
var isAnagram = function (s, t) {
    let sAnagram = s.split("").sort().join("");
    let tAnagram = t.split("").sort().join("");

    return sAnagram === tAnagram;
}

// Approach: Use a hash map to count the frequency of each character in s . 
// Then, iterate through t and decrement the count for each character. 
// If any count becomes negative, return false. Finally, check if all counts are zero.
var isAnagram2 = function (s, t) {
    if (s.length !== t.length) return false;
    let map = {};

    for(let i = 0; i < s.length; i++){
        if(!map[s[i]]){
            map[s[i]] = 1;
        } else {
            ++map[s[i]];
        }
    }
    for(let i = 0; i < t.length; i++){
        if(!map[t[i]] || map[t[i]] < 0){
            return false;
        } else {
            --map[t[i]];
        }
    }
    return true;
}

let s = "anagram", t = "nagaram";
console.log(isAnagram(s, t));
console.log(isAnagram2(s, t));