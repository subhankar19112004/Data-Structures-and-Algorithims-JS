// Hackerrank Problem: Number Line Jumps
// Two kangaroos are on a number line ready to jump in the positive direction 
// (i.e, toward positive infinity). 
// The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump. 
// The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump. 
// Given the starting locations and movement rates for each kangaroo, 
// can you determine if they'll ever land at the same location at the same time?

// Function Description
// Complete the function kangaroo in the editor below. It should return YES if they can land on the same location at the same time, or NO if they can't.
//Approach 1: Brute Force
function kangaroo(x1, v1, x2, v2) {
    if(x1 < x2 && v1 <= v2) return "NO";

    for(let i = 0; i < 10000; i++){
        if(x1 == x2) return "YES";

        x1 += v1;
        x2 += v2;
    }
    return "NO";
}

// Approach 2: Mathematical
function kangaroo2(x1, v1, x2, v2) {
    if(x1 < x2 && v1 <= v2) return "NO";

    if((x2 - x1) % (v2 - v1) == 0) return "YES";
    return "NO";
}    

// Example usage:
console.log(kangaroo2(0, 3, 4, 2)); // Output: YES
console.log(kangaroo2(0, 2, 5, 3)); // Output: NO