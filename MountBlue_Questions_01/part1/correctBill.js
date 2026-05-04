// Hackerrank - Bill Division
// Anna and Brian are sharing a meal at a restaurant and they agree to split the bill equally. 
// Brian wants to order something that Anna is allergic to though, 
// and they agree that Anna won't pay for that item. 
// Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

const correctBill = (bill, k, b) => {
    let total = 0;

    for(let i = 0; i < bill.length; i++){
        if(i !== k){
            total += bill[i];
        }
    }
    let actualShare = total / 2;

    if(actualShare === b){
        return "Bon Appetit";
    }
    return b - actualShare;
}

//Example usage:
console.log(correctBill([3, 10, 2, 9], 1, 12)); // Output: 5
console.log(correctBill([3, 10, 2, 9], 1, 7)); // Output: "Bon Appetit"
console.log(correctBill([4], 0, 4)); // Output: 4