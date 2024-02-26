// Given an array of integers and a target, find the maximum sum of the integers within any contiguous subarray of the given target

function fixedSlidingWindowFindMax(nums, target) {
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

console.log(fixedSlidingWindowFindMax([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3));
