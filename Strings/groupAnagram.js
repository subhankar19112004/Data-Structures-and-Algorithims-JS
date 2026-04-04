//49. Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Approach: We can use a hash map to group the anagrams together. 
// We iterate through each string in the input array, sort the characters of the string, and use the sorted string as a key in the hash map. 
// If the key does not exist, we create a new entry with the original string as the first element of an array. 
// If the key already exists, we push the original string into the existing array. 
// Finally, we return the values of the hash map as an array of arrays.

// Time Complexity: O(N*KlogK), where N is the number of strings in the input array and K is the maximum length of a string in the input array.
const groupAnagram = (strs) => {
    let map = {};
    for(let i = 0; i < strs.length; i++){
        let sortedStr = strs[i].split("").sort().join("");
        if(!map[sortedStr]){
            map[sortedStr] = [strs[i]];
        } else {
            map[sortedStr].push(strs[i]);
        }
    }
    return [...Object.values(map)];
}

// Approach-2: Instead of sorting the string, we can use a frequency array to count the occurrences of each character in the string.
// Time Complexity: O(N*K), where N is the number of strings in the input array and K is the maximum length of a string in the input array.

var groupAnagrams = function(strs) {
    let map = {};
    for(let i = 0; i < strs.length; i++){

        let freqArr = Array(26).fill(0);
        let s = strs[i];

        for(let j = 0; j < s.length; j++){
            let index = s[j].charCodeAt() - 'a'.charCodeAt();
            ++freqArr[index];
        }

        let key = "";
        for(let k = 0; k < 26; k++){
            key = key + String.fromCharCode(k) + freqArr[k];
        }

        if(!map[key]){
            map[key] = [strs[i]];
        } else {
            map[key].push(strs[i]);
        }
        
    }
    return [...Object.values(map)];
};

let strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagram(strs));
console.log(groupAnagrams(strs));

