/**
 * Longest Substring Without Repeating Characters
 * ===============
Given a string s, find the length of the longest substring without repeating characters.
*/
// Code by Rachmat Ghaly

var lengthOfLongestSubstring = function (s) {
  let result = {};
  let sArray = s.split("");
  if (s.length == 1 && s != "") {
    return (result = 1);
  } else if (s == "") {
    return (result = 0);
  } else {
    sArray.filter((value, index) => {
      let sumValue = 0;
      for (let i = 0; i < sArray.length; i++) {
        value == sArray[i] ? sumValue++ : false;
      }

      if (value != sArray[0]) {
        result[value] = sumValue;
      } else if ((value = sArray[0])) {
        for (let i = index + 1; i < sArray.length; i++) {
          value == sArray[i] ? (result[value] = sumValue) : false;
        }
      }
      //   result[value] = sumValue;
      // console.log(sumValue);
    });
    let finalResult = Object.keys(result).length;
    return finalResult;
  }

  if (s.length == 1 && s != "") {
    return (result = 1);
  } else if (s == "") {
    return (result = 0);
  } else {
    let longest = "";
    let current = "";
    const checkChar = new Set();

    for (let char of s) {
      if (!checkChar.has(char)) {
        current += char;
        checkChar.add(char);
      } else {
        if (current.length > longest.length) {
          longest = current;
        }
        current = "";
        checkChar.clear();
      }
    }

    return longest.length > current.length
      ? (result = longest.length)
      : (result = current.length);
  }
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring("aab"));

/**
 * OUTPUT EXAMPLE
 * 1
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
============
 * 2
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

============
 * 3
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */
