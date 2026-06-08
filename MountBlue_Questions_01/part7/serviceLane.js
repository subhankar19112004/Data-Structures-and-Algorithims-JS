// HackerRank - Service Lane
// A driver is driving on the freeway and wants to know the largest vehicle type that can pass through a service lane. 
// The service lane is represented as an array of widths, where each width corresponds to a segment of the lane. 
// The driver will provide a list of cases, where each case consists of a start and end index representing a segment of the service lane. 
// The task is to determine the largest vehicle type that can pass through each segment defined by the cases.
// The vehicle types are defined as follows:
// 1. Bike: width 1
// 2. Car: width 2
// 3. Truck: width 3
// The function should return an array of integers, 
// where each integer represents the largest vehicle type that can pass through the corresponding segment defined by the cases.
// Function to determine the largest vehicle type that can pass through each segment defined by the cases
// The function takes in an array of cases and an array of widths, and returns an array of integers representing the largest vehicle type for each case.

const serviceLane = (cases, width) => {
    let result = [];

    for(let [start, end] of cases) {
        let minWidth = width[start];

        for(let i = start; i <= end; i++) {
            minWidth = Math.min(minWidth, width[i]);
        }
        result.push(minWidth);
    }
    return result;
}

// Test case
const cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]];
const width = [2, 3, 1, 2, 3, 2, 3, 3];

const result = serviceLane(cases, width);
console.log(result); // Expected output: [1, 2, 3, 2, 1]
