//  Given an array of integers return the minimum positive value such that the step by step sum is never less than 1

function minStartValue(nums) {
  let ans = 1;
  let prefixSum = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    ans = Math.max(ans, 1 - prefixSum);
    console.log(ans, prefixSum);
  }
  return ans;
}

console.log(minStartValue([-3, 2, -3, 4, 2])); // 5
