// 1903: Given a string num representing a large integer, return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.
// A substring is a contiguous sequence of characters within a string.
// Approach: Start from the end of the string and check each character. 
// If you find an odd digit, return the substring from the start to that character. 
// If no odd digit is found, return an empty string.

const largestOddNumber = (s) => {
    let i = s.length - 1;
    while(i >= 0){
        if(Number(s[i]) % 2 == 1){
            return s.substring(0, i + 1);
        } else {
            --i;
        }
    }
    return "No Odd Substring Found";
}

let s = "52";
console.log(largestOddNumber(s));
console.log(largestOddNumber("4206"));
console.log(largestOddNumber("35427"));