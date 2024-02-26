// Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately

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

console.log(countElements([1, 2, 3])); // 2
console.log(countElements([1, 1, 3, 3, 5, 5, 7, 7])); // 0
