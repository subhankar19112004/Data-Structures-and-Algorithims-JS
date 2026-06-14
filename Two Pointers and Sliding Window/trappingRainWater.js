// Leetcode Problem: 42. Trapping Rain Water
// Difficulty: Hard
// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.
// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

const trappingRainWater = (height) => {
  let n = height.length;

  // Findinf Max from Left for a particular index
//   let maxL = [];
//   maxL[0] = height[0];
//   for (let i = 1; i < n; i++) {
//     maxL[i] = Math.max(height[i], maxL[i - 1]);
//   }

  // Finding Max from Right for a particular index
//   let maxR = [];
//   maxR[n - 1] = height[n - 1];
//   for (let i = n - 2; i >= 0; i--) {
//     maxR[i] = Math.max(height[i], maxR[i + 1]);
//   }

  // Approach 2 : Using one loop to find maxL and maxR 
  let maxL = [];
  let maxR = [];
  maxR[n - 1] = height[n - 1];
  maxL[0] = height[0];    
  for (let i = 1; i < n; i++) {
    maxL[i] = Math.max(height[i], maxL[i - 1]);
    maxR[n - 1 - i] = Math.max(height[n - 1 - i ], maxR[n - i]);

  }

  // Finding the total water trapped
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let waterTrapped = Math.min(maxL[i], maxR[i]) - height[i];
    ans += Math.max(waterTrapped, 0);
  }
  return ans;
};

// Test Cases
console.log(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trappingRainWater([4, 2, 0, 3, 2, 5]));
console.log(trappingRainWater([1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
