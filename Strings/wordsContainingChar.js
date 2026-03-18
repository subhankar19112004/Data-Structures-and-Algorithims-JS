// Given an array of words and a character, return an array of the indices of the words that contain the character.
// Approach-1: We can iterate through the array of words and check if each word contains the character. If it does, we can add the index of the word to the result array.
var findWordsContaining = function(words, x) {
    let res = [];
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < words[i].length; j++){
            if(words[i][j] == x){
                res.push(i);
                break;
            }
        }
    }
    return res;
};

// Approach-2: We can also use the .includes() method to check if each word contains the character. If it does, we can add the index of the word to the result array.
var findWordsContaining2 = function(words, x) {
    let res = [];
    for(let i = 0; i < words.length; i++){
        if(words[i].includes(x)){
            res.push(i);
        }
    }
    return res;
};