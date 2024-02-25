// // Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100]
// After sorting, it becomes [0,1,9,16,100]

const square = (num) => {
  return num * num;
};

function squaredArray(nums) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  let idx = n - 1;

  const sortedSquaresArray = new Array(n);

  while (left <= right) {
    const leftSquare = square(nums[left]);
    const rightSquare = square(nums[right]);

    if (leftSquare >= rightSquare) {
      sortedSquaresArray[idx] = leftSquare;
      left++;
    } else {
      sortedSquaresArray[idx] = rightSquare;
      right--;
    }
    idx--;
  }

  return sortedSquaresArray;
}

console.log(squaredArray([-4, -1, 0, 3, 10]));
