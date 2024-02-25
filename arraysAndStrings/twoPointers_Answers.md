## hasSumPair

_Given a sorted array and a target, return the indices of the two numbers. If there is no pair, return -1_

```JavaScript
function hasSumPair(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) {
      return [left, right];
    }

    if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return -1;
}
```

Time complexity: O(n) as we must traverse the entire array

Space complexity: O(1) as we only store two integers

We first create `left` and `right`, which are initialized to `0` and the _zero-indexed length of the passed array_. We need to target the zero-indexed length of the array because we'll be accessing the index values of the array via `nums[right]` etc, this means that we can't use `nums.length` because then we'd be off by 1

Then, we create a `while` loop that continues until `left` is no longer less than `right`. To make it more readable we create a `sum` variable that stores the calculation of `nums[left] + nums[right]`.

Then we compare `sum` to the passed `target` in our if statements. If there's a match, we return `[left, right]`, which will be indices of the values in `nums` that add up to the target.

If `sum > target` then we know that we need to decrement `right` because the passed is _sorted_. As such, we know that values at the end of the array are greater than those at the start. As such, if `sum > target` then we know that we can remove the right-most value from our sum and move _down_ the array.

Conversely, if our `sum < target` then we know that we remove the left-most value from our sum and move _up_ the array until `left` is no `< right`.

Lastly, if no pair is found we return `-1` to indicate that no pair was found

## reverseString

_Write a function that reverses a string array in place. s[i] is printable ascii character_

```JavaScript
function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let temp = s[right];
    s[right] = s[left];
    s[left] = temp;
    right--;
    left++;
  }

  return s;
}
```

Time complexity: O(n) as we must traverse the entire array

Space complexity: O(1) as we only store two integers and we modify the array in place

We create `left` and `right` as pointers to two ends of the passed array. Then, `while left < right` we store a `temp` variable that is `s[right]`. This allows us to immediately overwrite the current `s[right]` element with the `s[left]` element, allowing us to swap their position.

We then reassign `s[left]` to our temporary value, placing the previous right element over the original left element. Then we increment `left` and `right` respectively, to ensure that we progress through the entire array.

Lastly, we return the modified array
