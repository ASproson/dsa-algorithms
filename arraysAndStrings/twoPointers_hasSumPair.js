// Given a sorted array and a target, return the indices of the two numbers that sum to the target. If there is no pair, return -1

function hasSumPair(nums, target) {}

console.log(hasSumPair([1, 2], 3)); // Output: [0, 1] (1 + 2 = 3)
console.log(hasSumPair([2, 3, 4, 6], 7)); // Output: [1, 2] (3 + 4 = 7)
console.log(hasSumPair([2, 5, 7, 11, 15], 9)); // Output: [0, 2] (2 + 7 = 9)
console.log(hasSumPair([3, 3], 6)); // Output: [0, 1] (3 + 3 = 6)
console.log(hasSumPair([-1, 0, 3, 6, 8], 7)); // Output: [0, 4] (-1 + 8 = 7)
console.log(hasSumPair([1, 3, 5, 7], 12)); // Output: [2, 3] (5 + 7 = 12)
console.log(hasSumPair([1, 3, 5, 7], 9)); // Output: -1 (No pair sums up to 9)
