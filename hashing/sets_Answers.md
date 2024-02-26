## isPangram

_Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise. A pangram is a sentence where every letter of the English alphabet appears at least once_

```JavaScript
function isPangram(s) {
  return new Set(s).size === 26;
}
```

Time complexity: O(n), in the worst case scenario we must create a new unique and the passed string is all unique characters

Space complexity: O(n) as we possibly create a set that is the full length of the passed string

Here we create a new `Set` with the passed string. A set is a collection of _unique_ values, and a pangram is a sentence where every letter of the english alphabet appears at least once.

As such, we can create a set out of the passed sentence and test whether or not it equals 26 (the length of the alphabet). This will return a boolean, providing our answer

## missingNumber

_Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array_

```JavaScript
function missingNumber(nums) {
  const set = new Set(nums);
  for (let i = 0; i <= nums.length; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
}
```

Time complexity: O(n) as we must traverse the entire length of the passed array

Space complexity: O(n) as we may potentially create a set that is the full length of the passed array

First we create a new `set` from the passed array. We then interate over the passed array until we reach the equal length. On each iteration we test as to whether or not the `set` has the currently iterated value. If it does not, then we have our missing number and so return

## countElements

_Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately_

```JavaScript
function countElements(arr) {
  let count = 0;
  const set = new Set(arr);

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i] + 1)) {
      count++;
    }
  }

  return count;
}
```

Time complexity: O(n) as we must traverse the entire length of the passed array

Space complexity: O(n) as we may potentially create a set that is the full length of the passed array

First we initialize `count = 0` as we need to track how many elements exist that satisfiy the `x + 1` condition. We then create our set, which allows us to count the duplicates seperately

We then interate over the passed array checking to see whether or not the `set.has(arr[i] + 1)`. If it does, we increment `count`

Once the loop is complete we return the `count`
