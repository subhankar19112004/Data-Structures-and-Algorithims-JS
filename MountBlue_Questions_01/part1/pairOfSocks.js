// Hackerrank : Sales by Match

// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. 
// Given an array of integers representing the color of each sock, 
// determine how many pairs of socks with matching colors there are.

function sockMerchant(n, ar) {
    let map = {};
    let count = 0;

    for(let i = 0; i < n; i++){
        if(!map[ar[i]]){
            map[ar[i]] = 1;
        } else {
            map[ar[i]]++;
        }
        if(map[ar[i]] % 2 == 0){
            count++;
        }
    }
    return count;
}

let n = 9;
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let result = sockMerchant(n, ar);
console.log(result);// Output: 3