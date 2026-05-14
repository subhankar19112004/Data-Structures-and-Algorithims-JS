// HackerRank - Hurdle Race
// Dan is playing a video game in which his character competes in a hurdle race.
// Hurdles are of varying heights, and Dan has a maximum height he can jump. 
// There is a magic potion that Dan can take to increase his maximum jump height by 1 unit for each dose. 
// How many doses of the potion must Dan take to be able to jump all of the hurdles in the race?
// Given the height of the hurdles and Dan's maximum jump height, find the minimum number of doses Dan must take to complete
// the hurdle race. If Dan can already jump all of the hurdles, return 0.
// Note: Dan can only take whole doses of the potion, meaning he must take an integer number of doses.


const hurdleRace = (k, heights) => {
    let maxheight = heights[0];

    for(let i = 1; i < heights.length; i++){
        if(heights[i] > maxheight){
            maxheight = heights[i];
        }
    }
    if(maxheight <= k) return 0;
    return maxheight - k;
}

// Test cases
console.log(hurdleRace(4, [1, 6, 3, 5, 2])); // Output: 2
console.log(hurdleRace(7, [2, 5, 4, 5, 2])); // Output: 0
console.log(hurdleRace(3, [1, 2, 3, 4, 5])); // Output: 2
console.log(hurdleRace(5, [1, 2, 3, 4, 5])); // Output: 0
console.log(hurdleRace(1, [2, 3, 4, 5, 6])); // Output: 5