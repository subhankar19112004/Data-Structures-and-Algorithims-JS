// Breaking the Records

// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
// She tabulates the number of times she breaks her season record for most points and least points in a game.
//  Points scored in the first game establish her record for the season, and she begins counting from there.

function breakingRecords(arr) {
    // Write your code here
    let highest = arr[0];
    let lowest = arr[0];
    
    let highestCount = 0;
    let lowestCount = 0;
    
    for(let i = 1; i < arr.length; i++){
        let current = arr[i];
        if(current > highest){
            highest = current;
            highestCount++;
        } else if(current < lowest){
            lowest = current;
            lowestCount++;
        }
    }
    return [highestCount, lowestCount]
}

let arr = [10, 5, 20, 20, 4, 5, 2, 25, 1];
let result = breakingRecords(arr);
console.log(result);