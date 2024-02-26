// Given a string consisting of only lowercase English letters, find the length of the longest substring without repeating characters

function longestSubstringWithoutRepeating(s) {
  let left = 0;
  let maxLength = 0;
  const charMap = {};

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    if (charMap[currentChar] !== undefined && charMap[currentChar] >= left) {
      left = charMap[currentChar] + 1;
    }
    charMap[currentChar] = right;
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(longestSubstringWithoutRepeating("abcabcbb")); // 3
console.log(longestSubstringWithoutRepeating("bbbbb")); // 1
