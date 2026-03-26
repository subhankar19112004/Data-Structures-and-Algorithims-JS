// 125. Valid Palindrome
// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// Approach-1: Use two pointers, one starting from the beginning and the other from the end of the string. Move the pointers towards each other while skipping non-alphanumeric characters. Compare the characters at the pointers, ignoring case, until they meet or cross each other.
const validPalindrome = (s) => {

    s = s.toLowerCase();
    let filteredString = "";
    for(let i = 0; i < s.length; i++){
        if(s[i].match(/[a-z0-9]/i)){
            filteredString += s[i];
        }
    }
    let rev = filteredString.split("").reverse().join("");
    return rev == filteredString;
}