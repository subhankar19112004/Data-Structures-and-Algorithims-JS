// Leetcode 1094. Car Pooling
// There is a car with capacity empty seats.The vehicle only drives east(i.e., it cannot turn around and drive west).
// You are given the integer capacity and an array trips where trips[i] = [numPassengersi, fromi, toi]
// indicates that the ith trip has numPassengersi passengers and the locations to pick them up and drop them off are fromi and toi respectively.
// The locations are given as the number of kilometers due east from the car's initial location.
// Passengers are dropped off before new passengers are picked up at the same location.
// At every point along the route, the total number of passengers in the car must not exceed capacity.
// Return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise.

// Example 1:
// Input: trips = [[2,1,5],[3,3,7]], capacity = 4
// Output: false
// Explanation: The car starts at location 0 and drives east. It picks up 2 passengers at location 1 and drops them off at location 5. Then, it picks up 3 passengers at location 3 and drops them off at location 7. At location 3, there are 5 passengers in the car, which exceeds the capacity of 4.

// Example 2:
// Input: trips = [[2,1,5],[3,3,7]], capacity = 5
// Output: true
// Explanation: The car starts at location 0 and drives east. It picks up 2 passengers at location 1 and drops them off at location 5. Then, it picks up 3 passengers at location 3 and drops them off at location 7. At every point along the route, the total number of passengers in the car does not exceed the capacity of 5.



var carPooling = function (trips, capacity) {
    let loc = Array(1001).fill(0);

    for (let i = 0; i < trips.length; i++) {
        let [passengers, from, to] = trips[i];
        loc[from] = loc[from] + passengers;
        loc[to] = loc[to] - passengers;
    }

    let usedCapacity = 0;
    for (let i = 0; i < loc.length; i++) {
        usedCapacity += loc[i];
        if (usedCapacity > capacity) {
            return false;
        }
    }
    return true;
}

// Time Complexity: O(n + m) where n is the number of trips and m is the maximum location (1000 in this case).
// Space Complexity: O(m) where m is the maximum location (1001 in this case).

// Test Cases
console.log(carPooling([[2, 1, 5], [3, 3, 7]], 4));
console.log(carPooling([[2, 1, 5], [3, 3, 7]], 5));