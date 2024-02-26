## findMax

_Given an array of integers and a target, find the maximum sum of the integers within any contiguous subarray of the given target_

```JavaScript
function findMax(nums, target) {
  let left = 0;
  let current = 0;

  for (let i = 0; i < target; i++) {
    current += nums[i];
  }

  let answer = current;

  for (let right = target; right < nums.length; right++) {
    current -= nums[left];
    current += nums[right];
    left++;

    answer = Math.max(answer, current);
  }

  return answer;
}
```

Time complexity: O(n) as we must traverse the entire array

Space complexity: O(1) as only create integers

We first initialize `left` and `current` to 0. Left acts as our left bounding edge of the sliding window, and current acts as our comparator that we will use to compare against `answer` to determine which subarray has the maximum value

We will then determine the maximum sum of the first subarray by looping from `0` upto the `target`. This gives us the `current` maximum from which to compare. As such, we immediately set `answer` to `current`

Then we loop over the remainder of the passed array by initializing `right` from the `target` indices, incrementing it on each pass

On each loop we subtract `nums[left]` from the current whilst also adding `nums[right]` to the current. This is how we _slide_ the window over the array and maintain the correct sum for `current`

Lastly, we compare which value is greater with `Math.max(answer, current)` and then return the final `answer` once the loop completes

## findMaxAverage

_You are given an integer array nums consisting of n elements, and an integer k_

_Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value_

_Input nums = [1,12,-5,-6,50,3], k = 4_
_Output 12.75000_
_Explanation Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75_

```JavaScript
  let left = 0;
  let current = 0;
  for (let i = 0; i < k; i++) {
    current += nums[i];
  }

  let answer = current;

  for (let right = k; right < nums.length; right++) {
    current += nums[right];
    current -= nums[left];
    answer = Math.max(answer, current);
    left++;
  }

  return answer / k;
```

Time complexity: O(n) as we must traverse the entire array

Space complexity: O(1) as only create integers
