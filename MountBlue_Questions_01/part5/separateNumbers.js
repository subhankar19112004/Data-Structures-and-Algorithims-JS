// HackerRank - Separate the Numbers
/**
 * @param {A numeric string, &, is beautiful if it can be split into a sequence of two or more positive integers, alpha[1], a[2] ,..., alpha[r k ]. satisfying the following conditions:
a[i] - a[i - 1] = 1 for any 1 < i <= n i.e., each element in the sequence is 1 more than the previous element).
2. No a[i] contains a leading zero. For example, we can split s = 10203 into the sequence (1, 02, 03), but it is not beautiful because 02 and 03 have leading zeroes.
3. The contents of the sequence cannot be rearranged. For example, we can split 8312 into the sequence (3,1,2), but it is not beautiful because it breaks our first constraint (i.e., 1-3/1)
The diagram below depicts some beautiful strings.
"1234" "1" "2" "3" + "4"
"91011" "9" "10" + "11"
"99100" "99" + 100"
Perform q queries where each query consists of some integer string &. For each query, print whether or not the string is beautiful on a new line. If it is beautiful, print YES x, where x is the first number of the increasing sequence. If there are multiple such values of z, choose the smallest. Otherwise, print NO.
Function Description
Complete the separateNumbers function in the editor below.
separate Numbers has the following parameter:
s an integer value represented as a string
Prints
string: Print a string as described above. Return nothing.
Input Format
The first line contains an integer q, the number of strings to evaluate. Each of the next q lines contains an integer string & to query.
Constraints
1 <= q <= 10
1 <= |s| <= 32
s[i] \in [0 - 9]} s 
 * @returns 
 */

const separateNumbers = (s) => {
    for(let len = 1; len <= s.length / 2; len++){
        let first = BigInt(s.slice(0, len));

        if(s[0] === "0") break;

        let build = "";
        let current = first;

        while(build.length < s.length){
            build += current.toString();
            current++;
        }
        if(build === s) return "YES " + first.toString();
    }
    return "NO";
}

// Test cases
console.log(separateNumbers("1234")); // Expected output: "YES 1"
console.log(separateNumbers("91011")); // Expected output: "YES 9"
console.log(separateNumbers("99100")); // Expected output: "YES 99"
console.log(separateNumbers("101103")); // Expected output: "NO"
console.log(separateNumbers("010203")); // Expected output: "NO"
console.log(separateNumbers("13")); // Expected output: "NO"
console.log(separateNumbers("1")); // Expected output: "NO"