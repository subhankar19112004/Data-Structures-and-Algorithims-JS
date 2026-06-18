// HackerRank - Plus Minus
// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with 6 places after the decimal.
const plusMinus = (arr) => {
    let n = arr.length;
    let positive = 0;
    let negative = 0;
    let equal = 0;

    for(let i = 0; i < n; i++){
        if(arr[i] > 0){
            positive++;
        } else if(arr[i] < 0){
            negative++;
        } else {
            equal++;
        }
    }
    console.log((positive / n).toFixed(6));
    console.log((negative / n).toFixed(6));
    console.log((equal / n).toFixed(6));
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1])); // ['0.500000', '0.333333', '0.166667']

console.log("-------------------")
console.log(plusMinus([1, 2, 3, -1, -2, -3, 0, 0])); // ['0.375000', '0.375000', '0.250000']