// 205 : Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. 
// No two characters may map to the same character, but a character may map to itself.
// Approach: We can use two hash maps to keep track of the mappings from characters in s to characters in t and vice versa. 
// We iterate through both strings simultaneously and check if the current characters have been mapped before. 
// If they have, we check if the mapping is consistent. If not, we return false. 
// If we finish iterating through the strings without any inconsistencies, we return true.
const isIsomorphic = (s, t) => {
    let mapStoT = {};
    let mapTtoS = {};

    for(let i = 0; i < s.length; i++){
        if(!mapStoT[s[i]] && !mapTtoS[t[i]]){
            mapStoT[s[i]] = t[i];
            mapTtoS[t[i]] = s[i];
        } else if(mapTtoS[t[i]] !== s[i]){
            return false;
        } else if(mapStoT[s[i]] !== t[i]) {
            return false;
        }
    }
    return true;
}

let s = "egg", t = "add";
console.log(isIsomorphic(s, t));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("bbbaaaba", "aaabbbba"));
console.log(isIsomorphic("badc", "baba"));