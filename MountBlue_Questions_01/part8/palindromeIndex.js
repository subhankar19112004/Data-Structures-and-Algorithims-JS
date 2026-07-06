// Hackerrank : Palindrome Index
// Given a string of lowercase letters in the range ascii[a-z],
// determine the index of a character that can be removed to make the string a palindrome.
// There may be more than one solution, but any will do. For example, if your string is "bcbc",
// you can either remove 'b' at index 0 or 'c' at index 3. If the string is already a palindrome or
// there is no solution, return -1.
// Function to find the index of the character to remove
// to make the string a palindrome
// The function returns the index of the character to remove, or -1 if no solution exists
// The function uses two pointers to compare characters from the start and end of the string
// If a mismatch is found, it checks if removing either character results in a palindrome
// If so, it returns the index of the character to remove
// If not, it returns -1


function palindromeIndex(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            if (isPalindrome(s, left + 1, right)) {
                return left;
            } else if (isPalindrome(s, left, right - 1)) {
                return right;
            } else {
                return -1;
            }
        }
        left++;
        right--;
    }
    return -1;
}

function isPalindrome(s, left, right) {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// Test cases
console.log(palindromeIndex("aaab"));
console.log(palindromeIndex("aab"));
console.log(palindromeIndex("abc"));