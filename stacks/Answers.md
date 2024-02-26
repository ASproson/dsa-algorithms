## isValid

_Determine whether or not the passed string array is valid. A valid array is when the brackets can close evenly: [{([])}] === true, [{] === false_

```JavaScript
function isValid(s) {
  const stack = [];
  const matching = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const char of s) {
    // if character is an opening bracket, add to the stack
    if (char in matching) {
      stack.push(char);
    } else {
      // if we have a closing bracket but our stack is empty
      if (!stack.length) {
        return false;
      }
      const previousOpeningBracket = stack.pop();
      // if the top our of stack doesn't match provided closing bracket
      if (matching[previousOpeningBracket] !== char) {
        return false;
      }
    }
  }
  // If our stack has any remaining length, then we have remainder brackets
  return !stack.length;
}
```

Time complexity: O(n) as we traverse the entire array

Space complexity: O(n) as our stack may potentially be the full length of the passed array

First we initialize an empty `stack = []`. Then we create our `matching` map, which we will use to determine whether or not the currently iterated value correctly closes the most recent bracket on the stack

We then loop over the provided string array. If the currently iterated character is a key in `matching`, then we add it to our `stack`

If the current iterator is not a key (an opening bracket: `[`), it must a value (a closing bracket: `]`). Therefore, if our stack is empty, we know we have a mismatch and immediately return false

Otherwise, we pop the most recent value off the top of the stack. We used that popped value to see if the value of the current iterator matches with the most recently popped value: `matching[previousOpeningBracket] !== char`

If we have a mismatch in the key-value pair, then we know that it's an incorrect pair and can return false

Lastly, we do a boolean assertion to determine whether or our stack has any remaining brackets. If it does, then we know that the string array is not valid because not all the brackets have been closed. If the stack is empty, we return true
