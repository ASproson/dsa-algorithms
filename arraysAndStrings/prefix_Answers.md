## runningSum

_Given an array of `nums`, return the running sum of `nums`_

```JavaScript
function runningSum(nums) {
  const prefix = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    prefix.push(nums[i] + prefix[prefix.length - 1]);
  }
  return prefix;
}
```

Time complexity: O(n) as we must traverse the entire array

Space complexity: O(n) as create a new array that is the size of the passed array

We first initialize `prefix = [nums[0]]`, which allows us to store the first value of `nums` in a new array. Then, we map over `nums` starting `index[1]` (because we store `index[0]` in `prefix`), and push to our `prefix` array the currently iterated value + the most recent value in our `prefix` array.

Lastly, we return our newly created array which is the running sum of `nums`.

If `prefix.push(nums[i] + prefix[prefix.length - 1]);` is a bit confusing, you can think of `prefix` as a stack, or a stack of dinner plates.

`prefix[prefix.length - 1]` gets us the last value in `prefix`, which allows us to add it to the currently iterated value of `nums`.

## minStartValue

_Given an array of integers return the minimum positive value such that the step by step sum is never less than 1_

```JavaScript
function minStartValue(nums) {
  let ans = 1;
  let prefixSum = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    ans = Math.max(ans, 1 - prefixSum);
  }
  return ans;
}
```

Time complexity: O(n) as we must traverse the entire array

Space complexity: O(1) as we only create new integer values

We first initialize `ans = 1` as per the question that's the minimum value we can return.

We initialize `prefixSum = 0` because we want to iterate through `nums` and sum the iteration on each pass: `prefixSum += nums[i];`

During each iteration we test whether or not `ans` is greater than `1 - prefixSum`. This is a little confusing, if we're doing `1 - prefixSum`, what is `prefixSum = -3`?

This is a _double negative addition_, so we're actually adding the negative, not substracting it.

Let's say we have `nums = [-3, 2, -3, 4, 2]`, here's what iteration looks like:

First iteration:

`ans = 1`

`prefixSum = -3 (0 + -3)`

`ans = Math.max(ans, 1 - prefixSum); (1 + 3 = 4)`

`ans = 4`

Second iteration:

`ans = 4`

`prefixSum = -1 (-3 + 2)`

`ans = Math.max(ans, 1 - prefixSum); (ans > 1 + 1)`

`ans = 4`

Third iteration:

`ans = 4`

`prefixSum = -4 (-1 + -3)`

`ans = Math.max(ans, 1 - prefixSum); (1 + 4 = 5)`

`ans = 5`

It's tricky, and confusing, but when you break it down and try it a few times it'll come together
