// HackerRank - Jumping on the Clouds: Revisited
// There is a new mobile game that starts with consecutively numbered clouds.
// Some of the clouds are thunderheads and others are cumulus. 
// The player can jump on any cumulus cloud having a number that is equal to the number of 
// the current cloud plus k. The player must avoid the thunderheads. Determine the player's 
// remaining energy after jumping on the clouds, starting with 100 energy units.
// For each jump, the energy level decreases by 1 unit. If the player jumps on a thunderhead, 
// the energy level decreases by an additional 2 units. 
// The game ends when the player lands back on cloud 0.
// Function to calculate the remaining energy after jumping on the clouds
// Parameters:
// c: An array of binary integers where 0 represents a cumulus cloud and 1 represents a thunderhead.
// k: An integer representing the jump distance.
// Returns:
// An integer representing the remaining energy after completing the jumps.

const jumpingOnClouds = (c, k) => {
  // Initialize energy and position
  let energy = 100;
  let position = 0;
  let n = c.length;
  // Loop until we return to the starting cloud
  // Update position and energy based on the type of cloud
  // why? using do while loop because we need to execute the loop at least once
  // to jump from the starting cloud and check the energy after the first jump.
  // The loop will continue until we return to the starting cloud (position 0).
  do {
    position = (position + k) % n;

    energy -= 1;

    if (c[position] === 1) {
      energy -= 2;
    }
  } while (position !== 0);

  return energy;
};

// Test cases
console.log(jumpingOnClouds([0, 0, 1, 0], 2)); // Expected output: 96
console.log(jumpingOnClouds([0, 0, 0, 0, 0], 2)); // Expected output: 95
console.log(jumpingOnClouds([1, 0, 1, 0, 1, 0], 2)); // Expected output: 91
console.log(jumpingOnClouds([0, 1, 0, 1, 0, 1], 2)); // Expected output: 97
console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0], 3)); // Expected output: 96
console.log(jumpingOnClouds([0, 1, 1, 1, 0, 1], 2)); // Expected output: 95
