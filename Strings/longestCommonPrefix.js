// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".
// Approach: Start with the first string as the longest common prefix. 
// Compare it with each subsequent string and update the longest common prefix accordingly. 
// If at any point the longest common prefix becomes an empty string, return it immediately.

const longestCommonPrefix = (strs) => {
    let x = 0;
    while(x < strs[0].length){
        let ch = strs[0][x];
        for (let i = 0; i < strs.length; i++) {
            if(ch != strs[i][x] || x == strs[i].length){
                return strs[0].substring(0, x);
            }
        }
        x++;
    }
    return strs[0];
}

let strs = ["flower","flow","flowight"];
console.log(longestCommonPrefix(strs));