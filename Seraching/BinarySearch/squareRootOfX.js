// Leetcode: 69. Sqrt(x)
// Given a non-negative integer x, compute and return the square root of x.
// Since the return type is an integer, the decimal digits are truncated, 
// and only the integer part of the result is returned.
const squareRootOfX = (x) => {
    if(x < 2) return x;
    let left = 2;
    let right = Math.floor(x / 2);

    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let num = mid * mid;

        if(num === x) return mid;
        if(num > x) right = mid - 1;
        else left = mid + 1;
    }
    return right;
}

// Test Cases
console.log(squareRootOfX(4));
console.log(squareRootOfX(8));
console.log(squareRootOfX(9));
console.log(squareRootOfX(16));
console.log(squareRootOfX(25));
console.log(squareRootOfX(36));