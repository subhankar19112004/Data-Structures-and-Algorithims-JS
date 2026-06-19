// Hackerrank: ACM ICPC Team
// There are a number of people who will be attending ACM-ICPC World Finals.
// Each of them may be well versed in a number of topics. Given a list of topics known by each attendee,
// presented as binary strings, determine the maximum number of topics a 2-person team can know.
// Each subject has a column in the binary string, and a '1' means the subject is known while '0' means it is not.
// Also determine the number of teams that know the maximum number of topics. Return an integer array with two elements.
// The first is the maximum number of topics known,
// and the second is the number of teams that know that number of topics.
// Example
// people = ['10101', '11100', '11010', '00101']
// The attendees know the following topics:
// 10101
// 11100
// 11010
// 00101
// These attendees can form the following teams:
// 1. (0, 1) -> 11101 = 4 topics
// 2. (0, 2) -> 11111 = 5 topics
// 3. (0, 3) -> 10101 = 3 topics
// 4. (1, 2) -> 11110 = 4 topics
// 5. (1, 3) -> 11101 = 4 topics
// 6. (2, 3) -> 11111 = 5 topics
// Two teams know a maximum of 5 topics: (0, 2) and (2, 3).


function acmTeam(people) {
  // Write your code here
  let maxScore = 0;
  let maxTeams = 0;

  for (let i = 0; i < people.length; i++) {
    for (let j = i + 1; j < people.length; j++) {
      let currentTeamScore = 0;
      for (let k = 0; k < people[i].length; k++) {
        if (people[i][k] == "1" || people[j][k] == "1") {
          currentTeamScore++;
        }
      }
      if (currentTeamScore > maxScore) {
        maxScore = currentTeamScore;
        maxTeams = 1;
      } else if (currentTeamScore === maxScore) {
        maxTeams++;
      }
    }
  }
  return [maxScore, maxTeams];
}


// Test cases
console.log(acmTeam(["10101", "11100", "11010", "00101"]));
