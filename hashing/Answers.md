## isPangram

_Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise. A pangram is a sentence where every letter of the English alphabet appears at least once_

```JavaScript
function isPangram(s) {
  return new Set(s).size === 26;
}
```

Here we create a new `Set` with the passed string. A set is a collection of _unique_ values, and a pangram is a sentence where every letter of the english alphabet appears at least once.

As such, we can create a set out of the passed sentence and test whether or not it equals 26 (the length of the alphabet). This will return a boolean, providing our answer
