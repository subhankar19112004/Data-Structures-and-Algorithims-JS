// Leetcode : 1732. Find the Highest Altitude
// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes.
// The biker starts his trip on point 0 with altitude equal 0.


function largestAltitude(gain) {
  // 1. We start at the parking lot. Altitude is 0.
  let currentAltitude = 0;

  // 2. The highest point we have seen before even starting the hike is 0.
  let maxAltitude = 0;

  // 3. We take a step-by-step walk through our "map" (the gain array)
  for (let i = 0; i < gain.length; i++) {
    // Update our current position by adding the change in elevation
    // If gain[i] is positive, we go up. If negative, we go down.
    currentAltitude = currentAltitude + gain[i];

    // Ask ourselves: Is our current spot higher than the highest spot we remember?
    // Math.max automatically picks the bigger number for us.
    maxAltitude = Math.max(maxAltitude, currentAltitude);
  }

  // 4. After the hike is over, we return the record high altitude.
  return maxAltitude;
}


// test cases
console.log(largestAltitude([-5, 1, 5, 0, -7]));
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
console.log(largestAltitude([0]));