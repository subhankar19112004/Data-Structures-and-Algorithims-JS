// Hackerrank Problem: String Construction
// Given a string, determine the minimum cost of constructing the string by appending characters.
// The cost of appending a character is 1 if it is not already present in the string, and 0 if it is already present.
// For example, if the input string is "abcd", the cost is 4 because all characters are unique.
// If the input string is "abcabc", the cost is 3 because the first three characters are unique and the last three characters are already present in the string.
// The function returns the minimum cost of constructing the string by counting the number of unique characters in the string.
// The function uses a Set to store unique characters and returns the size of the Set as the cost.
// The function iterates through each character in the string and adds it to the Set, which automatically handles duplicates.
// The function returns the size of the Set, which represents the number of unique characters in the string and thus the minimum cost of constructing the string.
// The function handles edge cases such as empty strings by returning a cost of 0, as there are no characters to append.
// The function is efficient with a time complexity of O(n), where n is the length of the string, as it processes each character once.
// The function is also space-efficient, using O(k) space, where k is the number of unique characters in the string, as it only stores unique characters in the Set.
// The function can be tested with various input strings to verify its correctness and efficiency.
// The function can be used in scenarios where the cost of constructing strings needs to be minimized, such as in text processing or data compression applications.


function stringConstruction(s) {
  let uniqueChars = new Set(s);
  return uniqueChars.size;
}

// Test cases
console.log(stringConstruction("abcd"));
console.log(stringConstruction("abcabc"));