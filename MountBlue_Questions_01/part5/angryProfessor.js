// HackerRank - Angry Professor
// A Discrete Mathematics professor has a class of students. 
// Frustrated with their lack of discipline, 
// he decides to cancel class if fewer than some number of students are present when class starts.
// Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.
// Example
// k = 3
// a = [-1, -3, 4, 2]
// The first two students arrive on time (arrival times are negative or zero) and 
// the third student arrives late (arrival time is positive), so there are only 2 on time students.
// The professor cancels the class because 2 < k (3).
// Function Description
// Complete the angryProfessor function in the editor below. It should return YES if the class is cancelled or NO if it is not.
// angryProfessor has the following parameter(s):
// a: an array of integers that represent the arrival times of the students
// k: the threshold number of attendees required to avoid cancellation
// Constraints
// 1 <= n <= 1000
// 1 <= k <= n
// -100 <= a[i] <= 100, where a[i] is the i-th student's arrival time


const angryProfessor = (a, k) => {
  let early = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      early++;
    }
  }
  if (early >= k) {
    return "YES";
  }
  return "NO";
};

// Test cases
console.log(angryProfessor([-1, -3, 4, 2], 3)); // Output: "NO"
console.log(angryProfessor([-1, -3, 4, 2], 2)); // Output: "YES"
console.log(angryProfessor([0, -1, 2, 1], 2)); // Output: "YES"     
console.log(angryProfessor([-1, -2, -3, -4], 4)); // Output: "YES"
console.log(angryProfessor([-1, -2, -3, -4], 5)); // Output: "NO"