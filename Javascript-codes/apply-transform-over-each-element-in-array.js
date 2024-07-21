/** The Question
 Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
Example 2:

Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
Example 3:

Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.

 */

/** the Answer
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var map = function (arr, fn) {
  let newArr = [];

  for (let n = 0; n < arr.length; n++) {
    let v = arr.length - (arr.length - n);
    newArr.push(fn(arr[n], v));
  }
  return newArr;
};

/**
 * @testCase below
 */

// let fn = function plusone(n) {
//   return n + 1;
// };

// let fn = function plusone(n) {
//   return n + 10;
// };

let fn = function plusI(n, i) {
  return n + i;
};

// let fn = function constant(n, i) {
//   return 42;
// };

// let fn = function squareI(n, i) {
//   return Math.pow(i, 2);
// };

// let arr = [-10, 0, 10];
// let arr = [1, 2, 3];
// let arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

console.log(map(arr, fn));
