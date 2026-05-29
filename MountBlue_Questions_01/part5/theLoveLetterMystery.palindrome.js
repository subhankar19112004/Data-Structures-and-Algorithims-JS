// HackerRank - The Love Letter Mystery
// James found a love letter his friend Harry has written for his girlfriend. 
// James is a prankster, so he decides to meddle with the letter. 
// He changes all the words in the letter into palindromes.
// To do this, he follows two rules:
// 1. He can only reduce the value of a letter by 1 (i.e., he can change d to c, but he cannot change d to b).
// 2. He can repeatedly reduce the value of a letter until it becomes a, at which point it cannot be reduced any further.
// Each reduction in the value of a letter counts as a single operation. 
// Find the minimum number of operations required to convert a given string into a palindrome.

const theLoveLetterMystery = (s) => {
    let left = 0;
    let right = s.length - 1;
    let operations = 0;

    while(left < right){
        operations = operations + Math.abs(s.charCodeAt(left) - s.charCodeAt(right));
        left++;
        right--;
    }
    return operations;
}

// Time Complexity: O(n) - We traverse the string once, where n is the length of the string.
// Space Complexity: O(1) - We use a constant amount of space to store the left and right pointers and the operations count.

// Test cases
console.log(theLoveLetterMystery("abc"));
console.log(theLoveLetterMystery("abcba"));
console.log(theLoveLetterMystery("abcd"));
console.log(theLoveLetterMystery("cba"));