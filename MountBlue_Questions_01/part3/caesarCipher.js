//  HackerRank - Caesar Cipher
// Julius Caesar protected his confidential information by encrypting it using a cipher. 
// Caesar's cipher shifts each letter by a number of letters.
// Given a string, s, and a number, k, encrypt the string using Caesar's cipher. Then print the encrypted string.
// Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

const caesarCipher = (s, k) => {
    k = k % 26;
    let result = "";

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (ch >= 'a' && ch <= 'z') {
            let code = ch.charCodeAt(0);
            let newCode = code + k;

            if (newCode > 'z'.charCodeAt(0)) {
                newCode = newCode - 26;
            }

            result += String.fromCharCode(newCode);
        } else if (ch >= 'A' && ch <= 'Z') {
            let code = ch.charCodeAt(0);
            let newCode = code + k;

            if (newCode > 'Z'.charCodeAt(0)) {
                newCode = newCode - 26;
            }

            result = result + String.fromCharCode(newCode);
        } else {
            result = result + ch;
        }
    }
    return result;
}

// Test cases
console.log(caesarCipher("Hello, World!", 3)); // Output: "Khoor, Zruog!"
console.log(caesarCipher("abcXYZ", 2)); // Output: "cdeZAB"
console.log(caesarCipher("JavaScript", 5)); // Output: "OfwfXhwnuy"