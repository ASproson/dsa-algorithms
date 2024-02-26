## findDuplicates

_Given an array of integers, return an array of all the duplicates. You cannot use sets_

```JavaScript
function findDuplicates(nums) {
  const map = new Map();
  const dupes = [];

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      const count = map.get(nums[i]);
      map.set(nums[i], count + 1);
      if (count === 1) {
        dupes.push(nums[i]);
      }
    }
  }
  return dupes;
}
```

Time complexity: O(n) as we must traverse the entire length of the passed array

Space complexity: O(n) as the created array could be the length of the passed array in the worst case scenario

We first create an empty `map` and an empty `dupes` array. Then, we iterate over `nums`, testing to see if the current iterator is within the `map`. If it is not, we add it to the map and set its value to 1

If it _is_ in the map, we retrieve its current value and store that as `count`. We then return reset the current iterator in the map with its new `value` by incrementing its current `count` by 1

If `count === 1` we add it to our `dupes` array, ensuring that we only capture duplicate values once

## findTopScorers

_Given an array of strings that represents a students name and their score on a test, return the top scorers that achieved the highest score on the test_

```JavaScript
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
```

Time complexity: O(n) as we must traverse the entire length of the passed array

Space complexity: O(n) as the created map will be the length of the passed array

First we create an `scoreMap` and initialize `maxScore` to 0. We then map over the students array, splitting the string into `[name, score]` and whislt parsing the score

If `parsedScore > maxScore` we update `maxScore` to `parsedScore`. If the `scoreMap` does not currently have the current `parsedScore`, it gets added to the `scoreMap`. Lastly we `get` the currently `parsedScore` from the `scoreMap` and push the `name` to that score

This allows us to simply `return scoreMap.get(maxScore)`, which returns to us the the array of names that are stored in the map that have the highest score
