## longestOnes

_Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's_

_Input: (nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]), (k = 2)_

_Output: 6_

_Explanation: [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1]_

```JavaScript
function longestOnes(nums, k) {
  let left = 0;
  let maxOnes = 0;
  let zeroCount = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount++;
    }
    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }
    maxOnes = Math.max(maxOnes, right - left + 1);
  }

  return maxOnes;
}
```

Time complexity: O(n) as we must traverse the entire array

Space complexity: O(1) as we only create integers

First we initialize `left, maxOnes, zeroCount` to 0. This allows us to create a pointer with `left` and two comparators with the others

We then iterate over the passed array. On each iteration we test to see if the current value is equal to 0: `nums[right] === 0`. If it is, we increment `zeroCount`

We then create an inner loop based on the condition `zeroCount > k`. If at any point this is true, then we know that we have exceeded the maximum number of 0's (or flips) available to us. If `nums[left] === 0` then we know that we can decrement our `zeroCount`, because immediately after we will be incrementing `left`. Meaning that we will be removing that possible 0 from our list of current iterator comparisons

Within the outer loop, as we iterate through the array, we continuously update the `maxOnes` variable to keep track of the maximum consecutive ones we have encountered so far. We do this by taking the maximum of the current `maxOnes` and the difference between the right pointer (current position) and the left pointer (start position of the current window) plus one (`Math.max(maxOnes, right - left + 1)`). This calculation represents the length of the current window of ones

By updating `maxOnes` in this manner, we ensure that it always holds the maximum number of consecutive ones possible within the constraint of flipping at most k zeros

Finally, after iterating through the entire array, we return the value of `maxOnes`, which represents the maximum number of consecutive ones that can be achieved by flipping at most k zeros in the input binary array nums

We `+1` to our calculation because we need to calculate the length of the window inclusive of both `right` and `left`, if we didn't `+1` we would be missing the rightmost position
