// Hackerrank Problem: Staircase
// Given a positive integer n, print a staircase of size n using the # symbol. 
// The staircase should be right-aligned and consist of n lines, where the first line has 1 # symbol, 
// the second line has 2 # symbols, and so on until the nth line has n # symbols.

function stairCase(n) {
    for( let i = 1; i <= n; i++){
        let line = "";

        for(let j = 1; j <= n - i; j++){
            line = line + " ";
        }

        for(let j = 1; j <= i; j++){
            line = line + "#";
        }
        console.log(line);
    }
}

// Example usage:
stairCase(6);