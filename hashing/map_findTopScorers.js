// Given an array of strings that represents a students name and their score on a test, return the top scorers that achieved the highest score on the test

function findTopScorers(students) {
  const scoreMap = new Map();
  let maxScore = 0;

  for (const student of students) {
    const [name, score] = student.split(" ");
    const parsedScore = parseInt(score);

    if (parsedScore > maxScore) {
      maxScore = parsedScore;
    }

    if (!scoreMap.has(parsedScore)) {
      scoreMap.set(parsedScore, []);
    }
    scoreMap.get(parsedScore).push(name);
  }

  return scoreMap.get(maxScore);
}

console.log(
  findTopScorers([
    "Alice 90",
    "Bob 85",
    "Charlie 95",
    "David 95",
    "Eve 90",
    "Frank 85",
  ])
); // Charlie, David
