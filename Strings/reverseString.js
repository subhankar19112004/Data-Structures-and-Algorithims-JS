// 541. Reverse String II
// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.
// If there are fewer than k characters left, reverse all of them.
// If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original
// Approach-1: Iterate through the string in steps of 2k and reverse the first k characters in each step. Handle the cases where there are fewer than k characters left at the end of the string.

const reverseString = (s, k) => {
    s = s.split("");
    for(let i = 0; i < s.length; i = i + (2 * k)){
        let mid = Math.floor(k/2);
        for(let x = 0; x < mid; x++){
            let temp = s[i + x];
            s[i + x] = s[i + k - 1 - x];
            s[i + k - 1 - x] = temp;
        }
    }
    return s.join("");
}
let s = "abcdefg";
let k = 2;
console.log(reverseString(s, k));
console.log(reverseString("abcdefgabcdefg", 4));